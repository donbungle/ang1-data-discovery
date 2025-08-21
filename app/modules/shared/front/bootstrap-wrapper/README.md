# Bootstrap 5 Wrapper Directive

A universal AngularJS directive for wrapping and initializing Bootstrap 5 components.

## Usage

```html
<bs-wrapper 
    component="modal" 
    options="modalOptions"
    on-init="onModalInit(instance)"
    on-show="onModalShow(event)"
    on-hide="onModalHide(event)">
    
    <div class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal content -->
            </div>
        </div>
    </div>
</bs-wrapper>
```

## Supported Components

- **modal** - Bootstrap Modal
- **dropdown** - Bootstrap Dropdown
- **collapse** - Bootstrap Collapse
- **tab** - Bootstrap Tab
- **tooltip** - Bootstrap Tooltip
- **popover** - Bootstrap Popover
- **carousel** - Bootstrap Carousel
- **offcanvas** - Bootstrap Offcanvas
- **toast** - Bootstrap Toast
- **alert** - Bootstrap Alert
- **scrollspy** - Bootstrap ScrollSpy

## Attributes

- `component` (required) - The Bootstrap component type
- `options` (optional) - Configuration options object for the component
- `on-init` (optional) - Callback when component is initialized
- `on-show` (optional) - Callback when component is shown
- `on-hide` (optional) - Callback when component is hidden
- `on-toggle` (optional) - Callback when component is toggled

## Examples

### Modal
```html
<bs-wrapper component="modal" options="{backdrop: 'static'}">
    <div class="modal fade" id="myModal">
        <!-- Modal content -->
    </div>
</bs-wrapper>
```

### Dropdown
```html
<bs-wrapper component="dropdown">
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button">
            Dropdown
        </button>
        <ul class="dropdown-menu">
            <!-- Dropdown items -->
        </ul>
    </div>
</bs-wrapper>
```

### Tooltip
```html
<bs-wrapper component="tooltip" options="{title: 'Tooltip text'}">
    <button class="btn btn-primary">Hover me</button>
</bs-wrapper>
```

### Carousel
```html
<bs-wrapper component="carousel" options="{interval: 3000}">
    <div class="carousel slide" id="myCarousel">
        <!-- Carousel content -->
    </div>
</bs-wrapper>
```

## Controller Access

The directive exposes component methods to the parent scope:

```javascript
// For modals, dropdowns, tooltips, etc.
scope.show();    // Show the component
scope.hide();    // Hide the component  
scope.toggle();  // Toggle the component

// For carousels
scope.next();    // Go to next slide
scope.prev();    // Go to previous slide
scope.to(index); // Go to specific slide
scope.cycle();   // Start cycling
scope.pause();   // Pause cycling

// For alerts
scope.close();   // Close the alert

// For scrollspy
scope.refresh(); // Refresh scrollspy
```

## Notes

- Bootstrap 5 must be loaded before using this directive
- The directive automatically handles component cleanup on scope destruction
- Child elements are transcluded, so you maintain full control over the HTML structure
- Event callbacks are properly wrapped with `$scope.$apply()` for Angular digest cycle compatibility