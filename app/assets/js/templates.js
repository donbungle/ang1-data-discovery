angular.module('r4-ang1').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/componentes/componentes.html',
    "<div class=\"md-padding2\" flex >\n" +
    "    <md-card>\n" +
    "        <md-card-content layout=\"row\" layout-xs=\"column\" layout-md=\"column\">\n" +
    "			<div flex=\"grow\" layout=\"column\">\n" +
    "				<div flex=\"grow\" class=\"\">\n" +
    "					<h1>Componentes {{vm.tema_actual}}</h1>\n" +
    "				</div>\n" +
    "				<div flex=\"grow\" class=\"relleno2\">\n" +
    "					<md-content flex=\"grow\">\n" +
    "						<div layout=\"column\">\n" +
    "							<div class=\"header_component_list_item\">\n" +
    "								<h3 class=\"md-headline\">header_component_list_item</h3>								\n" +
    "							</div>\n" +
    "							<div class=\"body_component_list_item\" layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-md=\"column\">\n" +
    "								<box-base icono=\"now_widgets\" titulo=\"Box base\">\n" +
    "									\n" +
    "								</box-base>\n" +
    "								<box-base icono=\"alarm_add\" titulo=\"Box base 2\">\n" +
    "									\n" +
    "								</box-base>\n" +
    "							</div>\n" +
    "							<div class=\"footer_component_list_item\">\n" +
    "								<h3 class=\"md-subhead\" ng-click=\"vm.test()\">footer_component_list_item</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</md-content>\n" +
    "				</div>\n" +
    "				<div flex=\"grow\">\n" +
    "					<theme-selector \n" +
    "						primary=\"vm.primary_obj\" \n" +
    "						warn=\"vm.warn_obj\" \n" +
    "						accent=\"vm.accent_obj\"\n" +
    "						primary_h1=\"vm.primary_h1_obj\" \n" +
    "						warn_h1=\"vm.warn_h1_obj\" \n" +
    "						accent_h1=\"vm.accent_h1_obj\"\n" +
    "						primary_h2=\"vm.primary_h2_obj\" \n" +
    "						warn_h2=\"vm.warn_h2_obj\" \n" +
    "						accent_h2=\"vm.accent_h2_obj\"\n" +
    "						primary_h3=\"vm.primary_h3_obj\" \n" +
    "						warn_h3=\"vm.warn_h3_obj\" \n" +
    "						accent_h3=\"vm.accent_h3_obj\"\n" +
    "						background=\"vm.background_obj\"\n" +
    "						default=\"vm.default_obj\"\n" +
    "						dark=\"vm.dark_obj\">\n" +
    "					</theme-selector>\n" +
    "				</div>\n" +
    "				<div flex=\"grow\" class=\"relleno\">\n" +
    "					<md-content>\n" +
    "						Lorem ipsum dolor sit amet, ne quod novum mei.\n" +
    "					</md-content>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<nav class=\"navbar navbar-light\">\n" +
    "	<div class=\"container\">\n" +
    "		<a editable=\"inline\" class=\"navbar-brand\" href=\"https://library.livecanvas.com/sections/\">\n" +
    "			<img src=\"https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg\" width=\"48\" height=\"48\" class=\"align-middle me-1 img-fluid\" alt=\"My Website\">\n" +
    "			My Site</a>\n" +
    "\n" +
    "		<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasNavbar\" aria-controls=\"offcanvasNavbar\">\n" +
    "			<span class=\"navbar-toggler-icon\"></span>\n" +
    "		</button>\n" +
    "\n" +
    "		<!-- START OFFCANVAS -->\n" +
    "		<!-- To customize and view the offcanvas, utilize the \"show\" class, but make sure to remove it once you are finished. -->\n" +
    "		<div class=\"offcanvas offcanvas-end p-2 bg-light\" tabindex=\"-1\" id=\"offcanvasNavbar\" aria-labelledby=\"offcanvasNavbarLabel\">\n" +
    "			<div class=\"offcanvas-header\">\n" +
    "				<div class=\"lc-block\">\n" +
    "					<div editable=\"rich\">\n" +
    "						<h5 class=\"offcanvas-title\" id=\"offcanvasNavbarLabel\">Menu</h5>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n" +
    "			</div>\n" +
    "			<div class=\"offcanvas-body\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col\">\n" +
    "						<div class=\"lc-block mb-4\">\n" +
    "\n" +
    "							<div lc-helper=\"shortcode\" class=\"live-shortcode me-auto\"> <!--  lc_nav_menu -->\n" +
    "								<ul id=\"menu-menu-1\" class=\"navbar-nav\">\n" +
    "									<li class=\"menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739\"><a href=\"https://library.livecanvas.com/starters\" class=\"nav-link \">BS5 Page Templates</a></li>\n" +
    "									<li class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738\"><a href=\"https://library.livecanvas.com/sections/\" class=\"nav-link \">BS5 Snippets</a></li>\n" +
    "								</ul> <!-- /lc_nav_menu -->\n" +
    "							</div>\n" +
    "\n" +
    "\n" +
    "						</div>\n" +
    "						<div class=\"lc-block\">\n" +
    "							<a class=\"btn btn-primary\" href=\"#\" role=\"button\">Buy Now</a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- END OFFCANVAS -->\n" +
    "\n" +
    "	</div>\n" +
    "</nav>\n" +
    "<main class=\"container\">\n" +
    "	<div class=\"animation_test md-hue-22\" ui-view></div>\n" +
    "</main>"
  );


  $templateCache.put('app/modules/home/inicio.html',
    "<div>\n" +
    "    <h1>Inicio</h1>\n" +
    "    <relleno></relleno>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/layouts/main-page/main-page.html',
    "    <md-toolbar ng-show=\"!showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>\n" +
    "                <a href=\"/\">r4-ang1</a>\n" +
    "            </h3>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\n" +
    "        <ui-view layout=\"column\" layout-fill layout-padding>\n" +
    "\n" +
    "\n" +
    "        </ui-view>\n" +
    "    </md-content>\n"
  );


  $templateCache.put('app/modules/layouts/main/main.html',
    "<div layout=\"row\" class=\"full-height\">\n" +
    "    <!-- left sidebar -->\n" +
    "\n" +
    "    <md-sidenav class=\"admin-sidebar-left md-sidenav-left hide-scrollbars md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"layout.sideMenuSize !== 'hidden' && $mdMedia('gt-sm')\" ui-view=\"sidebarLeft\" ng-class=\"{ 'admin-sidebar-collapsed': layout.sideMenuSize == 'icon' }\" ng-mouseover=\"layoutController.activateHover()\" ng-mouseleave=\"layoutController.removeHover()\"></md-sidenav>\n" +
    "\n" +
    "    <!-- main content -->\n" +
    "    <div id=\"admin-panel\" layout=\"column\" flex>\n" +
    "        <!-- loading animation -->\n" +
    "        <tri-loader></tri-loader>\n" +
    "\n" +
    "        <!-- top toolbar -->\n" +
    "        <md-toolbar class=\"admin-toolbar\" ng-if=\"layout.showToolbar\" md-theme=\"{{triSkin.elements.toolbar}}\" ui-view=\"toolbar\" ng-class=\"[layout.toolbarSize,layout.toolbarClass]\"></md-toolbar>\n" +
    "\n" +
    "        <!-- scrollable content -->\n" +
    "        <md-content ng-class=\"layout.contentClass\" flex tri-default-content ui-view=\"content\"></md-content>\n" +
    "\n" +
    "        <div ui-view=\"belowContent\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- right sidebar -->\n" +
    "    <md-sidenav layout layout-fill class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"notifications\" ui-view=\"sidebarRight\"></md-sidenav>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/side-nav/sidenav.html',
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"20\">\n" +
    "                        <img style=\"width: 36px; height: 36px; border-radius: 50%\"\n" +
    "                             actual-src=\"data:image/jpeg;base64,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\"\n" +
    "                             showloader=\"\" loader-class=\"preload\" loader-src=\"app/assets/images/loader.gif\"\n" +
    "                             src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAsMBgkICQcJCQgGCQcGBgYFBgcHBQkGBgUHCQcGBgcHChwXBwgaCQcHGCEMGhERHxMfBxciGCIeGBAeHxIBBQUFBwcFDAgIBxIIBQgSHhISEhISHhISEhISHh4SEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAHCAMFBgQCAQD/xAA6EAABAgQDBQYFAQgDAQAAAAACAQMABBESBQYiByExMkETQlFSYWIIcXKBoSMzgpGSorLR8BQk4RX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AG0WPx9I+RDOPIIqS+F0BVZyx5uUknZpw0RGBU9XTTCJbRs6zGI4icw66pNiRCwBUsFoVXSm7wpBF+JraOr75yDRr2LSkLpCVBMx7q06ekAFmbVCUV7yRETg4pP7y3B+YmfcRw7b6J3fNp7sRYPhrkxMCy2JEpeX/wAg97NdkjQEL02KHuG0D6FAAl3CnFqQtOKgr3RVRX3cIv8AD2Udl1lyAxcG20iFUG4e7SGvYy/Ltgggw2iD3bEivm8uS6uoX/GBFrdcI01faGGFJk5pyVnbhJW3GjuElGhad/VIcfYRtHHEJImjokzLgHaj5htp2iRgtoORWJlg9CA4IkQmA6rresCfY9i7mHZqbaKqC6RSrgFzEJlQa19YqnmU/GPKxzST1wpTjQf7Y6C9YCzJeMYra1mQJbCXSUqOECi343EOn7RsDPSvyhZfivxYhsADWggREIlu1ad6QC05mxHtZpwlJVUjMi+ojVbv49Ipe0W/0H+7uxYtYM8Uq5OtgJtMLa5aVXUu3dpZ4V6xYbOsrnPT7cu3dqISdMR5Wh5oygnfDlhaFMG6o8qW3W8ChjmJe2lOb3cvhGXy3l+Xw+TS3TYn6h8CX3LHO9tPkBPsldVLVISIh4xpWyqq+u/+rhHG/dduHqo/LzRVS2epAhEhnARfKW4rvWJix1shV1sk7MSAbxLStxaoD5ijaoBcV3W28Kwv+0PCSbxmUm03K66PL5rq7oOuPTwqFwEhXd4SSkYvMWFJMnJEttrU2yThdLL0ur9oA/5ecXsGitVFNpkv5mki2UvvEEkgoAiNEQUtbt5bB3D+I9ksBNiszawZr3RUrvaIwnXxD48B313uvl5tKNCX43Q1OfcQskHNNVMCBsB4qRpuhBNoc45/9F4Xq1E1HV0tKgjv9IlSrfIcyIybulVQQUCpyqJFXekEz4ZZFtDmnUFaitt3tMuVIHGxdgXH3mnBq2QFp9x7hgy7DcFclX5wTGjbpj2Hrq6xBqc/TAixruVvvCnFRgF5rxiVSYQBkyRT5SMKcxUhn5uSA+Iou7lIajGAzhk9tzWjQK4K/p6E3fKNKCOHygEe9qlpfLveEEzHHf8Aj5cuCo3qkWGXtnVrvbPnRSW+xOVfcsaTPuBg5hJs7lQQ/Tt8w8v3gFmHM0wswgBMm2hLaQ7zC2CfkybdZk0ecnEdR9wBbAh0jaSKVPWkU2GZaQXUvY1abdPH5+Mdue3OxGQZaoBOvkTg920RgybPBZhClWj43NgX8wJHSZxnsjTF2Fy5cbmw+1ookXarBoP9suYBZJv2XH7VtHm+dYS3PM528469uW8iK63vEVYZTbNid8/MNIKIjTdokZUERMKq4pQrOJLrIbkVLi1D1tKJUqyyDmY5KcR8BQ0pY60Y1EvLT1rDIbN8xI+0L279XVaPdK7lhTz3cPqgqbHMdtBWriuArvndEDRMTKrQkJNSR01HmXup1jL5exds2EqSItLSr0KPmP460AWm+gXppJev5jSu6YxVFNRbbv1W3CXDV0+0RYmikwfRaEP+pAj2g577AbZGZGpJc4Vur6fSKpdtF0kouCqviNpEnKXS6njAELD3hW8TFO0aXmLzf4gRbV8YQceYBa2sANxeBOrzfyxHge0G6a/UFRR1dX1d2MjnvEhexYzTeg2BcXtTV+YjJwdguPo9IKyW8pMrCIeoENwF86UglkaQuXwszSoUySVVugCJeJcF+0MK06hcOEVosnxOOqxihWFaM02gueojTTC9Tn7UqcCXTBo+JTGgfxFRQhPsG7bhKooRU4QF3G06kteYYlSvDqcBi0ydPk3ODQqXrq+mKevjXT4xNhy/9gfaoxEHbCMwUESQ046vWB/tEzI4/iPZNkqgCCIjdpQuscU2+4GneiElzZf4jKuvEjpFdRdRe6Au3cKdLTeirTmujyOX6ftHwH96Kg8UctQUdX/fGIXZkl5iUl90BMqiD9wlWxeaPMsqk7duVSLVd5iWORVrx/ej2waoS0410l4QDX/D480MujQigqQCJW0/aiWr8QYmpi3h4wpuw/GibnGxUuYv4kWlfxDQsPIo7+9qt8NMVSLYtMKRKJEpGXMRFUlisdqhJHTxNYgfSkBG+VY7cCbq+g9SSK5FjswmYQHQNa0FRut8sRBZl8IF2SQTAtCaTQe9GOxrKhXKo/1cywfNm5y78gBt0PSIkBeYh61SJsx4G0WgmkAi73h8oBYHsuOjxIaU/eirfbUVtXu96C/mvBVC4LPpXxGBfjrFrtsBV1j2A6V90fEj2qwF5lDGFYmAO7cC3W/T4QwmW9q0sQiJnYVBu7XoXpCwSyav93RMZrdcm5fNAf/Z\">\n" +
    "                    </div>\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;font-size: 1em;\">\n" +
    "                        <div>Fernando Monteiro</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n"
  );


  $templateCache.put('app/modules/servicios/servicios.html',
    "<div class=\"container\">\n" +
    "	<h1>Content from: servicios page</h1>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/shared/front/graficos/graflinea/graflinea.html',
    "<div id=\"{{vm.idGrafico}}\">GRAFICO LINEAS</div>"
  );


  $templateCache.put('app/modules/shared/front/grilla/grilla.html',
    "<div>\n" +
    "    <style ui-grid-style>{{ vm.celda_style }}</style>\n" +
    "    <style ui-grid-style>{{ vm.celda_style2 }}</style>\n" +
    "    <div id=\"grid1\" ui-grid=\"vm.gridOptions\" ui-grid-edit class=\"grid\"  style=\"color: black;\"  md-colors=\"{backgroundColor: '{{vm.tema_actual}}-primary-300'}\"></div>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/shared/front/relleno/relleno.html',
    "<div style=\"width: 100%;height: auto;min-height: 100px;\" md-colors=\"{backgroundColor: '{{vm.color}}'}\">\n" +
    "    RELLENO\n" +
    "</div>"
  );

}]);
