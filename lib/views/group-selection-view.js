'use strict';

class GroupSelectionView extends HTMLElement {

    // native
    createdCallback () {
        this.classList.add('block');
        this.description = document.createElement('label');
        this.select = document.createElement('select');
        this.select.classList.add('form-control');
        this.appendChild(this.description);
        this.appendChild(this.select);
    }

    attachedCallback () {}

    detachedCallback () {}

    // custom
    setDescription (description) {
        this.description.textContent = description;
    }

    setGroups (groups) {
        if (!groups || !groups.length) {
            return;
        }

        function forEachGroup(group) {
            let option;
            option = document.createElement('option');
            option.value = 'option-' + group.name;
            if (group.group) {
                option.setAttribute('data-group', group.group);
            }
            if (group.group) {
                option.textContent = group.name + ' (' + group.group + ')';
            } else {
                option.textContent = group.name;
            }
            this.select.appendChild(option);
        }

        groups.forEach(forEachGroup, this);
    }

    getSelectedGroup () {
        return this.select.value;
    }

    setDefaultGroup (group) {
        if (!group || !group.name) {
            return;
        }
        this.select.value = 'option-' + group.name;
    }
}

module.exports = document.registerElement(
    'group-selection-view',
    {
        prototype: GroupSelectionView.prototype,
        extends: 'div'
    }
);
