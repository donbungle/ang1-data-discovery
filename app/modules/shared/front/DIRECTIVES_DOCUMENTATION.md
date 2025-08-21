# Bootstrap 5 & DC.js Directives Documentation

This document provides comprehensive usage examples for all the custom AngularJS directives created for Bootstrap 5 components and DC.js charts.

## Table of Contents

1. [Bootstrap 5 Directives](#bootstrap-5-directives)
   - [Accordion](#accordion)
   - [Buttons](#buttons)
   - [Breadcrumb](#breadcrumb)
   - [Card](#card)
   - [Navs & Tabs](#navs--tabs)
   - [Navbar](#navbar)
2. [DC.js Charts Directive](#dcjs-charts-directive)

---

## Bootstrap 5 Directives

### Accordion

**Directive:** `<bs-accordion>`

**Location:** `app/modules/shared/front/accordion/accordionDirective.js`

#### Basic Usage

**View:**
```html
<bs-accordion 
    options="accordionOptions" 
    on-show="onAccordionShow(event, target)"
    on-hide="onAccordionHide(event, target)">
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" 
                 data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    This is the first item's accordion body.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Accordion Item #2
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" 
                 data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    This is the second item's accordion body.
                </div>
            </div>
        </div>
    </div>
</bs-accordion>
```

**Controller:**
```javascript
$scope.accordionOptions = {
    parent: false // Allow multiple panels open simultaneously
};

$scope.onAccordionShow = function(event, target) {
    console.log('Accordion panel showing:', target.id);
};

$scope.onAccordionHide = function(event, target) {
    console.log('Accordion panel hiding:', target.id);
};

// Methods available on directive scope
$scope.showPanel = function(targetId) {
    $scope.show('#' + targetId);
};

$scope.hidePanel = function(targetId) {
    $scope.hide('#' + targetId);
};
```

#### Options
- `options`: Bootstrap Collapse options object
- `on-show`: Callback when panel starts showing
- `on-hide`: Callback when panel starts hiding
- `on-shown`: Callback when panel is fully shown
- `on-hidden`: Callback when panel is fully hidden

---

### Buttons

**Directive:** `<bs-buttons>`

**Location:** `app/modules/shared/front/buttons/buttonsDirective.js`

#### Basic Usage

**View:**
```html
<bs-buttons 
    variant="primary" 
    size="lg" 
    outline="false"
    disabled="isDisabled"
    loading="isLoading"
    loading-text="Processing..."
    on-click="handleButtonClick(event, button)">
    <button type="button" class="btn">Primary Button</button>
    <button type="button" class="btn">Secondary Button</button>
</bs-buttons>
```

**Controller:**
```javascript
$scope.isDisabled = false;
$scope.isLoading = false;

$scope.handleButtonClick = function(event, button) {
    console.log('Button clicked:', button);
    $scope.isLoading = true;
    
    // Simulate async operation
    setTimeout(function() {
        $scope.$apply(function() {
            $scope.isLoading = false;
        });
    }, 2000);
};

// Control button states
$scope.enableButtons = function() {
    $scope.disable();
};

$scope.disableButtons = function() {
    $scope.enable();
};

$scope.startLoading = function() {
    $scope.startLoading('Please wait...');
};

$scope.stopLoading = function() {
    $scope.stopLoading();
};
```

#### Options
- `variant`: Button color variant (primary, secondary, success, danger, etc.)
- `size`: Button size (sm, lg)
- `outline`: Boolean for outline style
- `disabled`: Boolean to disable buttons
- `loading`: Boolean to show loading state
- `loading-text`: Text to show during loading
- `on-click`: Click event callback

---

### Breadcrumb

**Directive:** `<bs-breadcrumb>`

**Location:** `app/modules/shared/front/breadcrumb/breadcrumbDirective.js`

#### Basic Usage

**View:**
```html
<bs-breadcrumb 
    items="breadcrumbItems"
    on-item-click="handleBreadcrumbClick(item, index, event)">
    <ol class="breadcrumb">
        <!-- Items will be generated automatically from items array -->
    </ol>
</bs-breadcrumb>
```

**Controller:**
```javascript
$scope.breadcrumbItems = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/products' },
    { text: 'Category', href: '/products/category' },
    { text: 'Current Page' } // Last item has no href (active)
];

$scope.handleBreadcrumbClick = function(item, index, event) {
    console.log('Breadcrumb clicked:', item, 'at index:', index);
    event.preventDefault();
    // Custom navigation logic here
    $location.path(item.href);
};

// Dynamic breadcrumb management
$scope.addBreadcrumb = function(item) {
    $scope.addItem(item);
};

$scope.removeBreadcrumb = function(index) {
    $scope.removeItem(index);
};

$scope.clearBreadcrumbs = function() {
    $scope.clearItems();
};
```

#### Options
- `items`: Array of breadcrumb items
- `separator`: Custom separator (optional)
- `on-item-click`: Click event callback

#### Item Format
```javascript
{
    text: 'Display Text',      // Required
    href: '/path',             // Optional, creates link
    url: '/path',              // Alternative to href
    link: '/path'              // Alternative to href
}
```

---

### Card

**Directive:** `<bs-card>`

**Location:** `app/modules/shared/front/card/cardDirective.js`

#### Basic Usage

**View:**
```html
<bs-card 
    header="Card Header"
    title="Card Title"
    subtitle="Card Subtitle"
    text="This is the card body text content."
    footer="Card Footer"
    img-src="/path/to/image.jpg"
    img-alt="Card image"
    img-top="true"
    variant="primary"
    border="success"
    text-align="center"
    on-header-click="handleHeaderClick(event, element)"
    on-body-click="handleBodyClick(event, element)"
    on-footer-click="handleFooterClick(event, element)">
</bs-card>
```

**Controller:**
```javascript
$scope.handleHeaderClick = function(event, element) {
    console.log('Card header clicked');
};

$scope.handleBodyClick = function(event, element) {
    console.log('Card body clicked');
};

$scope.handleFooterClick = function(event, element) {
    console.log('Card footer clicked');
};

// Dynamic card updates
$scope.updateCardTitle = function() {
    $scope.updateTitle('New Card Title');
};

$scope.updateCardText = function() {
    $scope.updateText('Updated card content');
};

$scope.updateCardImage = function() {
    $scope.updateImage('/new/image.jpg', 'New image');
};
```

#### Options
- `header`: Card header text
- `title`: Card title text
- `subtitle`: Card subtitle text
- `text`: Card body text
- `footer`: Card footer text
- `img-src`: Image source URL
- `img-alt`: Image alt text
- `img-top`: Boolean, image position (top/bottom)
- `variant`: Card color variant
- `border`: Border color
- `text-align`: Text alignment (left, center, right)
- Event callbacks for header, body, footer clicks

---

### Navs & Tabs

**Directive:** `<bs-navs-tabs>`

**Location:** `app/modules/shared/front/navs-tabs/navsTabsDirective.js`

#### Basic Usage

**View:**
```html
<bs-navs-tabs 
    type="tabs"
    variant="pills"
    fill="true"
    justified="false"
    vertical="false"
    active-tab="activeTabId"
    on-tab-change="handleTabChange(event, tab, relatedTarget, activeTab)"
    on-tab-show="handleTabShow(event, tab, relatedTarget)"
    on-tab-hide="handleTabHide(event, tab, relatedTarget)">
    
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" data-bs-toggle="tab" 
                    data-bs-target="#home" type="button">Home</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" data-bs-toggle="tab" 
                    data-bs-target="#profile" type="button">Profile</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" data-bs-toggle="tab" 
                    data-bs-target="#contact" type="button">Contact</button>
        </li>
    </ul>
    
    <!-- Tab content -->
    <div class="tab-content">
        <div class="tab-pane fade show active" id="home" role="tabpanel">
            Home content
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel">
            Profile content
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel">
            Contact content
        </div>
    </div>
</bs-navs-tabs>
```

**Controller:**
```javascript
$scope.activeTabId = '#home';

$scope.handleTabChange = function(event, tab, relatedTarget, activeTab) {
    console.log('Tab changed to:', activeTab);
    $scope.currentTab = activeTab;
};

$scope.handleTabShow = function(event, tab, relatedTarget) {
    console.log('Tab showing:', tab.getAttribute('data-bs-target'));
};

$scope.handleTabHide = function(event, tab, relatedTarget) {
    console.log('Tab hiding:', tab.getAttribute('data-bs-target'));
};

// Programmatic tab control
$scope.switchToTab = function(tabId) {
    $scope.showTab(tabId);
};

$scope.getCurrentTab = function() {
    return $scope.getActiveTab();
};

$scope.disableTab = function(tabId) {
    $scope.disableTab(tabId);
};

$scope.enableTab = function(tabId) {
    $scope.enableTab(tabId);
};
```

#### Options
- `type`: Tab type (tabs, pills)
- `variant`: Style variant
- `fill`: Boolean, fill available space
- `justified`: Boolean, equal width tabs
- `vertical`: Boolean, vertical orientation
- `active-tab`: Currently active tab ID
- Event callbacks for tab changes

---

### Navbar

**Directive:** `<bs-navbar>`

**Location:** `app/modules/shared/front/navbar/navbarDirective.js`

#### Basic Usage

**View:**
```html
<bs-navbar 
    brand="My App"
    brand-href="/"
    brand-img="/logo.png"
    brand-img-alt="Logo"
    variant="dark"
    expand="lg"
    fixed="top"
    sticky="top"
    container="fluid"
    on-brand-click="handleBrandClick(event, brand)"
    on-toggle="handleToggle(event)"
    on-collapse="handleCollapse(event)"
    on-expand="handleExpand(event)">
    
    <div class="container-fluid">
        <!-- Navbar content will be wrapped automatically -->
        <div class="navbar-collapse collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                        Services
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/service1">Service 1</a></li>
                        <li><a class="dropdown-item" href="/service2">Service 2</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</bs-navbar>
```

**Controller:**
```javascript
$scope.handleBrandClick = function(event, brand) {
    console.log('Brand clicked');
    $location.path('/');
};

$scope.handleToggle = function(event) {
    console.log('Navbar toggled');
};

$scope.handleCollapse = function(event) {
    console.log('Navbar collapsed');
};

$scope.handleExpand = function(event) {
    console.log('Navbar expanded');
};

// Programmatic navbar control
$scope.collapseNavbar = function() {
    $scope.collapse();
};

$scope.expandNavbar = function() {
    $scope.expand();
};

$scope.toggleNavbar = function() {
    $scope.toggle();
};

$scope.changeBrand = function() {
    $scope.updateBrand('New Brand Name', '/new-home');
};
```

#### Options
- `brand`: Brand text
- `brand-href`: Brand link URL
- `brand-img`: Brand image URL
- `brand-img-alt`: Brand image alt text
- `variant`: Navbar variant (light, dark)
- `expand`: Responsive breakpoint (sm, md, lg, xl)
- `fixed`: Fixed position (top, bottom)
- `sticky`: Sticky position (top, bottom)
- `container`: Container type (default, fluid, false)
- Event callbacks for interactions

---

## DC.js Charts Directive

**Directive:** `<dc-chart>`

**Location:** `app/modules/shared/front/dc-charts/dcChartsDirective.js`

### Dependencies Required

Make sure to include these libraries in your HTML:
```html
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://unpkg.com/crossfilter2/crossfilter.min.js"></script>
<script src="https://unpkg.com/dc@4/dist/dc.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/dc@4/dist/style/dc.min.css">
```

### Basic Usage Examples

#### Bar Chart

**View:**
```html
<dc-chart 
    chart-type="bar"
    data="salesData"
    dimensions="['date']"
    groups="['sales']"
    width="600"
    height="400"
    x-axis-label="Date"
    y-axis-label="Sales ($)"
    elastic-y="true"
    brush-on="true"
    on-filtered="handleChartFilter(chart, filter)"
    on-renderlet="handleChartRender(chart)">
</dc-chart>
```

**Controller:**
```javascript
$scope.salesData = [
    { date: '2023-01', sales: 1000, region: 'North' },
    { date: '2023-02', sales: 1200, region: 'North' },
    { date: '2023-03', sales: 800, region: 'South' },
    { date: '2023-04', sales: 1500, region: 'North' },
    { date: '2023-05', sales: 1100, region: 'South' }
];

$scope.handleChartFilter = function(chart, filter) {
    console.log('Chart filtered:', filter);
};

$scope.handleChartRender = function(chart) {
    console.log('Chart rendered');
};
```

#### Pie Chart

**View:**
```html
<dc-chart 
    chart-type="pie"
    data="categoryData"
    dimensions="['category']"
    groups="['value']"
    width="400"
    height="400"
    colors="pieColors">
</dc-chart>
```

**Controller:**
```javascript
$scope.categoryData = [
    { category: 'Technology', value: 45 },
    { category: 'Healthcare', value: 30 },
    { category: 'Finance', value: 15 },
    { category: 'Education', value: 10 }
];

$scope.pieColors = d3.scaleOrdinal()
    .domain(['Technology', 'Healthcare', 'Finance', 'Education'])
    .range(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']);
```

#### Bubble Chart

**View:**
```html
<dc-chart 
    chart-type="bubble"
    data="bubbleData"
    dimensions="['x']"
    groups="['y']"
    width="600"
    height="400"
    key-accessor="getKey"
    value-accessor="getValue"
    radius-accessor="getRadius"
    color-accessor="getColor"
    elastic-x="true"
    elastic-y="true">
</dc-chart>
```

**Controller:**
```javascript
$scope.bubbleData = [
    { x: 10, y: 20, size: 30, color: 'A' },
    { x: 15, y: 25, size: 40, color: 'B' },
    { x: 20, y: 15, size: 25, color: 'A' },
    { x: 25, y: 30, size: 50, color: 'C' }
];

$scope.getKey = function() {
    return function(d) { return d.x; };
};

$scope.getValue = function() {
    return function(d) { return d.y; };
};

$scope.getRadius = function() {
    return function(d) { return d.size; };
};

$scope.getColor = function() {
    return function(d) { return d.color; };
};
```

#### Line Chart

**View:**
```html
<dc-chart 
    chart-type="line"
    data="timeSeriesData"
    dimensions="['date']"
    groups="['value']"
    width="800"
    height="300"
    x-axis-label="Time"
    y-axis-label="Value"
    elastic-y="true"
    brush-on="true">
</dc-chart>
```

**Controller:**
```javascript
$scope.timeSeriesData = [
    { date: new Date('2023-01-01'), value: 100 },
    { date: new Date('2023-01-02'), value: 120 },
    { date: new Date('2023-01-03'), value: 90 },
    { date: new Date('2023-01-04'), value: 150 },
    { date: new Date('2023-01-05'), value: 110 }
];
```

### Advanced Configuration

#### Custom Configuration Function

**View:**
```html
<dc-chart 
    chart-type="bar"
    data="complexData"
    custom-config="customChartConfig">
</dc-chart>
```

**Controller:**
```javascript
$scope.customChartConfig = function(chart) {
    chart
        .x(d3.scaleBand())
        .xUnits(dc.units.ordinal)
        .yAxisPadding('10%')
        .margins({ top: 20, right: 20, bottom: 50, left: 60 })
        .renderHorizontalGridLines(true)
        .renderVerticalGridLines(true);
};
```

#### Multiple Charts with Shared Filters

**View:**
```html
<div class="row">
    <div class="col-md-6">
        <dc-chart 
            chart-type="bar"
            data="sharedData"
            dimensions="['month']"
            groups="['sales']"
            width="400"
            height="300">
        </dc-chart>
    </div>
    <div class="col-md-6">
        <dc-chart 
            chart-type="pie"
            data="sharedData"
            dimensions="['region']"
            groups="['sales']"
            width="400"
            height="300">
        </dc-chart>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <button ng-click="resetAllFilters()" class="btn btn-primary">Reset All</button>
        <button ng-click="redrawAllCharts()" class="btn btn-secondary">Redraw All</button>
    </div>
</div>
```

**Controller:**
```javascript
$scope.sharedData = [
    { month: 'Jan', region: 'North', sales: 1000 },
    { month: 'Jan', region: 'South', sales: 800 },
    { month: 'Feb', region: 'North', sales: 1200 },
    { month: 'Feb', region: 'South', sales: 900 },
    // ... more data
];

$scope.resetAllFilters = function() {
    dc.filterAll();
    dc.redrawAll();
};

$scope.redrawAllCharts = function() {
    dc.redrawAll();
};
```

### Chart Types Available

- `bar` / `barchart`: Bar chart
- `line` / `linechart`: Line chart
- `pie` / `piechart`: Pie chart
- `bubble` / `bubblechart`: Bubble chart
- `scatter` / `scatterplot`: Scatter plot
- `row` / `rowchart`: Row chart
- `composite`: Composite chart
- `datachart` / `datatable`: Data table
- `datacount`: Data count widget

### Configuration Options

#### Common Options
- `chart-type`: Type of chart to render
- `data`: Array of data objects
- `dimensions`: Array of dimension keys
- `groups`: Array of group/metric keys
- `width` / `height`: Chart dimensions
- `margins`: Chart margins object
- `colors`: Color scale or array
- `ordinal-colors`: Ordinal color scheme

#### Axis Options
- `x-axis-label` / `y-axis-label`: Axis labels
- `elastic-x` / `elastic-y`: Auto-scale axes

#### Interaction Options
- `brush-on`: Enable brush selection
- `on-filtered`: Filter event callback
- `on-renderlet`: Render event callback

#### Accessor Functions
- `key-accessor`: Key accessor function
- `value-accessor`: Value accessor function
- `color-accessor`: Color accessor function
- `radius-accessor`: Radius accessor function (bubble charts)

### Methods Available on Scope

- `redraw()`: Redraw the chart
- `render()`: Re-render the chart
- `filter(value)`: Apply filter to chart
- `filterAll()`: Clear all filters
- `getFilters()`: Get current filters
- `getChart()`: Access underlying DC chart instance
- `getDimension()`: Access crossfilter dimension
- `getGroup()`: Access crossfilter group

This documentation covers all the directives with comprehensive examples for both view templates and controller logic.