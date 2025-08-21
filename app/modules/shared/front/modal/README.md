# Bootstrap 5 Modal Directive

A reusable AngularJS directive that wraps Bootstrap 5 modal functionality.

## Usage

```html
<bs-modal modal-id="exampleModal" title="Modal Title" size="lg">
  <p>Your modal content goes here...</p>
</bs-modal>
```

## Attributes

- `modal-id`: Unique identifier for the modal (required)
- `title`: Modal title text (optional)
- `size`: Modal size - 'sm', 'lg', or 'xl' (optional)
- `backdrop`: Whether to show backdrop - 'true', 'false', or 'static' (default: 'true')
- `keyboard`: Whether to close on escape key - 'true' or 'false' (default: 'true')
- `on-show`: Callback function when modal is about to show (optional)
- `on-hide`: Callback function when modal is about to hide (optional)
- `on-hidden`: Callback function when modal is completely hidden (optional)

## Example with all options

```html
<bs-modal 
  modal-id="advancedModal" 
  title="Advanced Modal" 
  size="xl"
  backdrop="static"
  keyboard="false"
  on-show="vm.onModalShow()"
  on-hide="vm.onModalHide()"
  on-hidden="vm.onModalHidden()">
  
  <div class="mb-3">
    <label class="form-label">Input field</label>
    <input type="text" class="form-control">
  </div>
  
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</bs-modal>
```

## Programmatic Control

The directive exposes methods through the controller that can be accessed via the directive's scope:

```javascript
// In your controller
$scope.showModal = function() {
  // Access the modal directive's controller and call show()
  // This requires a reference to the directive's scope
};
```

## Requirements

- Bootstrap 5 CSS and JS
- AngularJS 1.x