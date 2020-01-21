(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <head>\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n  </head>\r\n\r\n  <body>\r\n\r\n    <div *ngIf=\"!loginService.isLogged\">\r\n      <app-login [url]=\"this.router.url\"></app-login>\r\n    </div>\r\n\r\n    <div *ngIf=\"loginService.isLogged\">\r\n      <app-menu></app-menu>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, loginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/error.interceptor */ "./src/app/auth/error.interceptor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ang_jsoneditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ang-jsoneditor */ "./node_modules/ang-jsoneditor/fesm5/ang-jsoneditor.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _itinerary_lesson_lesson_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./itinerary/lesson/lesson.service */ "./src/app/itinerary/lesson/lesson.service.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _itinerary_lesson_lessonEditor_lesson_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./itinerary/lesson/lessonEditor/lesson-editor.component */ "./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.ts");
/* harmony import */ var _card_card_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./card/card.service */ "./src/app/card/card.service.ts");
/* harmony import */ var _slide_slide_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./slide/slide.service */ "./src/app/slide/slide.service.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/unit/unit.component.ts");
/* harmony import */ var _question_definitionQuestion_definitionQuestion_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./question/definitionQuestion/definitionQuestion.component */ "./src/app/question/definitionQuestion/definitionQuestion.component.ts");
/* harmony import */ var _question_definitionQuestion_definitionQuestion_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./question/definitionQuestion/definitionQuestion.service */ "./src/app/question/definitionQuestion/definitionQuestion.service.ts");
/* harmony import */ var _question_listQuestion_listQuestion_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./question/listQuestion/listQuestion.component */ "./src/app/question/listQuestion/listQuestion.component.ts");
/* harmony import */ var _question_listQuestion_listQuestion_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./question/listQuestion/listQuestion.service */ "./src/app/question/listQuestion/listQuestion.service.ts");
/* harmony import */ var _progress_module_progress_module_progress_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./progress/module-progress/module-progress.component */ "./src/app/progress/module-progress/module-progress.component.ts");
/* harmony import */ var _progress_class_progress_class_progress_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./progress/class-progress/class-progress.component */ "./src/app/progress/class-progress/class-progress.component.ts");
/* harmony import */ var _progress_progress_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./progress/progress.service */ "./src/app/progress/progress.service.ts");
/* harmony import */ var _question_question_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./question/question.service */ "./src/app/question/question.service.ts");
/* harmony import */ var _question_testQuestion_testQuestion_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./question/testQuestion/testQuestion.component */ "./src/app/question/testQuestion/testQuestion.component.ts");
/* harmony import */ var _question_testQuestion_testQuestion_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./question/testQuestion/testQuestion.service */ "./src/app/question/testQuestion/testQuestion.service.ts");
/* harmony import */ var _course_myCourses_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./course/myCourses.component */ "./src/app/course/myCourses.component.ts");
/* harmony import */ var _course_myCourses_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./course/myCourses.service */ "./src/app/course/myCourses.service.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./course/course.service */ "./src/app/course/course.service.ts");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./tab/tab.service */ "./src/app/tab/tab.service.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _course_newCourse_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./course/newCourse.component */ "./src/app/course/newCourse.component.ts");
/* harmony import */ var _course_newCourse_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./course/newCourse.service */ "./src/app/course/newCourse.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _itinerary_lesson_lessonTools_units_cards_tool_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./itinerary/lesson/lessonTools/units-cards-tool.component */ "./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.ts");
/* harmony import */ var _itinerary_lesson_lessonForm_lesson_form_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./itinerary/lesson/lessonForm/lesson-form.component */ "./src/app/itinerary/lesson/lessonForm/lesson-form.component.ts");
/* harmony import */ var _question_answerQuestionDialog_answerDefinitionDialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./question/answerQuestionDialog/answerDefinitionDialog.component */ "./src/app/question/answerQuestionDialog/answerDefinitionDialog.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _itinerary_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./itinerary/lesson/lesson.component */ "./src/app/itinerary/lesson/lesson.component.ts");
/* harmony import */ var _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./confirmAction/confirm-action.component */ "./src/app/confirmAction/confirm-action.component.ts");
/* harmony import */ var _question_addQuestionDialog_addQuestionDialog_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./question/addQuestionDialog/addQuestionDialog.component */ "./src/app/question/addQuestionDialog/addQuestionDialog.component.ts");
/* harmony import */ var _itinerary_module_module_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./itinerary/module/module.component */ "./src/app/itinerary/module/module.component.ts");
/* harmony import */ var _itinerary_module_moduleEditor_module_editor_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./itinerary/module/moduleEditor/module-editor.component */ "./src/app/itinerary/module/moduleEditor/module-editor.component.ts");
/* harmony import */ var _itinerary_module_module_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./itinerary/module/module.service */ "./src/app/itinerary/module/module.service.ts");
/* harmony import */ var _itinerary_lesson_unit_lesson_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./itinerary/lesson/unit-lesson.service */ "./src/app/itinerary/lesson/unit-lesson.service.ts");
/* harmony import */ var _itinerary_module_unit_module_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./itinerary/module/unit-module.service */ "./src/app/itinerary/module/unit-module.service.ts");
/* harmony import */ var _itinerary_module_moduleForm_module_form_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./itinerary/module/moduleForm/module-form.component */ "./src/app/itinerary/module/moduleForm/module-form.component.ts");
/* harmony import */ var _itinerary_module_moduleEditor_units_blocks_tool_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./itinerary/module/moduleEditor/units-blocks-tool.component */ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.ts");
/* harmony import */ var _itinerary_module_moduleRename_module_rename_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./itinerary/module/moduleRename/module-rename.component */ "./src/app/itinerary/module/moduleRename/module-rename.component.ts");





























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _itinerary_lesson_lessonForm_lesson_form_component__WEBPACK_IMPORTED_MODULE_47__["LessonFormComponent"],
                _itinerary_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_50__["LessonComponent"],
                _itinerary_module_module_component__WEBPACK_IMPORTED_MODULE_53__["ModuleComponent"],
                _itinerary_module_moduleForm_module_form_component__WEBPACK_IMPORTED_MODULE_58__["ModuleFormComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_44__["LoginComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_45__["MenuComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"],
                _unit_unit_component__WEBPACK_IMPORTED_MODULE_25__["UnitComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_19__["CardComponent"],
                _itinerary_lesson_lessonEditor_lesson_editor_component__WEBPACK_IMPORTED_MODULE_20__["LessonEditorComponent"],
                _itinerary_module_moduleEditor_module_editor_component__WEBPACK_IMPORTED_MODULE_54__["ModuleEditorComponent"],
                _itinerary_lesson_lessonTools_units_cards_tool_component__WEBPACK_IMPORTED_MODULE_46__["UnitsCardsToolComponent"],
                _itinerary_module_moduleEditor_units_blocks_tool_component__WEBPACK_IMPORTED_MODULE_59__["UnitsBlocksToolComponent"],
                _question_definitionQuestion_definitionQuestion_component__WEBPACK_IMPORTED_MODULE_26__["DefinitionQuestionComponent"],
                _question_listQuestion_listQuestion_component__WEBPACK_IMPORTED_MODULE_28__["ListQuestionComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_23__["QuestionComponent"],
                _progress_module_progress_module_progress_component__WEBPACK_IMPORTED_MODULE_30__["ModuleProgressComponent"],
                _progress_class_progress_class_progress_component__WEBPACK_IMPORTED_MODULE_31__["ClassProgressComponent"],
                _question_testQuestion_testQuestion_component__WEBPACK_IMPORTED_MODULE_34__["TestQuestionComponent"],
                _course_myCourses_component__WEBPACK_IMPORTED_MODULE_36__["MyCoursesComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_38__["CourseComponent"],
                _course_newCourse_component__WEBPACK_IMPORTED_MODULE_42__["NewCourseComponent"],
                _question_answerQuestionDialog_answerDefinitionDialog_component__WEBPACK_IMPORTED_MODULE_48__["AnswerDefinitionDialogComponent"],
                _question_addQuestionDialog_addQuestionDialog_component__WEBPACK_IMPORTED_MODULE_52__["AddQuestionDialogComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_49__["HomeComponent"],
                _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_51__["ConfirmActionComponent"],
                _itinerary_module_moduleRename_module_rename_component__WEBPACK_IMPORTED_MODULE_60__["ModuleRenameComponent"]
            ],
            entryComponents: [
                _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_51__["ConfirmActionComponent"],
                _itinerary_module_moduleRename_module_rename_component__WEBPACK_IMPORTED_MODULE_60__["ModuleRenameComponent"]
            ],
            imports: [
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                ang_jsoneditor__WEBPACK_IMPORTED_MODULE_13__["NgJsonEditorModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentCommonModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentLayoutModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentMediaModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentExpansionPanelModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentStepsModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentLoadingModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentDialogsModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentSearchModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentPagingModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentNotificationsModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentMenuModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentDataTableModule"], _covalent_core__WEBPACK_IMPORTED_MODULE_2__["CovalentMessageModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_41__["NgxChartsModule"]
            ],
            providers: [_auth_login_service__WEBPACK_IMPORTED_MODULE_16__["LoginService"], _itinerary_lesson_lesson_service__WEBPACK_IMPORTED_MODULE_17__["LessonService"], _itinerary_module_module_service__WEBPACK_IMPORTED_MODULE_55__["ModuleService"], _card_card_service__WEBPACK_IMPORTED_MODULE_21__["CardService"], _slide_slide_service__WEBPACK_IMPORTED_MODULE_22__["SlideService"], _question_definitionQuestion_definitionQuestion_service__WEBPACK_IMPORTED_MODULE_27__["DefinitionQuestionService"], _question_listQuestion_listQuestion_service__WEBPACK_IMPORTED_MODULE_29__["ListQuestionService"],
                _question_question_service__WEBPACK_IMPORTED_MODULE_33__["QuestionService"], _progress_progress_service__WEBPACK_IMPORTED_MODULE_32__["ProgressService"], _question_testQuestion_testQuestion_service__WEBPACK_IMPORTED_MODULE_35__["TestQuestionService"], _course_myCourses_service__WEBPACK_IMPORTED_MODULE_37__["MyCoursesService"], _course_course_service__WEBPACK_IMPORTED_MODULE_39__["CourseService"], _tab_tab_service__WEBPACK_IMPORTED_MODULE_40__["TabService"], _unit_unit_service__WEBPACK_IMPORTED_MODULE_24__["UnitService"], _course_newCourse_service__WEBPACK_IMPORTED_MODULE_43__["NewCourseService"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_45__["MenuComponent"], _itinerary_lesson_unit_lesson_service__WEBPACK_IMPORTED_MODULE_56__["UnitLessonService"], _itinerary_module_unit_module_service__WEBPACK_IMPORTED_MODULE_57__["UnitModuleService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["BasicAuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _itinerary_lesson_lessonEditor_lesson_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itinerary/lesson/lessonEditor/lesson-editor.component */ "./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _question_definitionQuestion_definitionQuestion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question/definitionQuestion/definitionQuestion.component */ "./src/app/question/definitionQuestion/definitionQuestion.component.ts");
/* harmony import */ var _question_listQuestion_listQuestion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question/listQuestion/listQuestion.component */ "./src/app/question/listQuestion/listQuestion.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _progress_module_progress_module_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress/module-progress/module-progress.component */ "./src/app/progress/module-progress/module-progress.component.ts");
/* harmony import */ var _question_testQuestion_testQuestion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question/testQuestion/testQuestion.component */ "./src/app/question/testQuestion/testQuestion.component.ts");
/* harmony import */ var _course_myCourses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course/myCourses.component */ "./src/app/course/myCourses.component.ts");
/* harmony import */ var _course_newCourse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course/newCourse.component */ "./src/app/course/newCourse.component.ts");
/* harmony import */ var _itinerary_lesson_lessonTools_units_cards_tool_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./itinerary/lesson/lessonTools/units-cards-tool.component */ "./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.ts");
/* harmony import */ var _itinerary_lesson_lessonForm_lesson_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./itinerary/lesson/lessonForm/lesson-form.component */ "./src/app/itinerary/lesson/lessonForm/lesson-form.component.ts");
/* harmony import */ var _question_answerQuestionDialog_answerDefinitionDialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./question/answerQuestionDialog/answerDefinitionDialog.component */ "./src/app/question/answerQuestionDialog/answerDefinitionDialog.component.ts");
/* harmony import */ var _question_addQuestionDialog_addQuestionDialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./question/addQuestionDialog/addQuestionDialog.component */ "./src/app/question/addQuestionDialog/addQuestionDialog.component.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/unit/unit.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _itinerary_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./itinerary/lesson/lesson.component */ "./src/app/itinerary/lesson/lesson.component.ts");
/* harmony import */ var _itinerary_module_module_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./itinerary/module/module.component */ "./src/app/itinerary/module/module.component.ts");
/* harmony import */ var _itinerary_module_moduleEditor_module_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./itinerary/module/moduleEditor/module-editor.component */ "./src/app/itinerary/module/moduleEditor/module-editor.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _itinerary_module_moduleForm_module_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./itinerary/module/moduleForm/module-form.component */ "./src/app/itinerary/module/moduleForm/module-form.component.ts");
/* harmony import */ var _itinerary_module_moduleEditor_units_blocks_tool_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./itinerary/module/moduleEditor/units-blocks-tool.component */ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.ts");























var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"] },
    { path: 'unit', component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
    { path: 'unit/:unitId', component: _unit_unit_component__WEBPACK_IMPORTED_MODULE_15__["UnitComponent"] },
    { path: 'unitsCardsTool', component: _itinerary_lesson_lessonTools_units_cards_tool_component__WEBPACK_IMPORTED_MODULE_11__["UnitsCardsToolComponent"] },
    { path: 'unitsBlocksTool', component: _itinerary_module_moduleEditor_units_blocks_tool_component__WEBPACK_IMPORTED_MODULE_22__["UnitsBlocksToolComponent"] },
    { path: 'lessonForm', component: _itinerary_lesson_lessonForm_lesson_form_component__WEBPACK_IMPORTED_MODULE_12__["LessonFormComponent"] },
    { path: 'moduleForm', component: _itinerary_module_moduleForm_module_form_component__WEBPACK_IMPORTED_MODULE_21__["ModuleFormComponent"] },
    { path: 'units/:unitId/cards', component: _card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"] },
    { path: 'units/:unitId/lessons', component: _itinerary_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_17__["LessonComponent"] },
    { path: 'units/:unitId/modules', component: _itinerary_module_module_component__WEBPACK_IMPORTED_MODULE_18__["ModuleComponent"] },
    { path: 'units/:unitId/lessons/:lessonId', component: _itinerary_lesson_lessonEditor_lesson_editor_component__WEBPACK_IMPORTED_MODULE_0__["LessonEditorComponent"] },
    { path: 'units/:unitId/modules/:moduleId/lessons/:lessonId', component: _itinerary_lesson_lessonEditor_lesson_editor_component__WEBPACK_IMPORTED_MODULE_0__["LessonEditorComponent"] },
    { path: 'units/:unitId/modules/:moduleId', component: _itinerary_module_moduleEditor_module_editor_component__WEBPACK_IMPORTED_MODULE_19__["ModuleEditorComponent"] },
    { path: 'course/:courseId/modules/:moduleId', component: _itinerary_module_moduleEditor_module_editor_component__WEBPACK_IMPORTED_MODULE_19__["ModuleEditorComponent"] },
    { path: 'units/:unitId/question', component: _question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"] },
    { path: 'answerQuestionDialog', component: _question_answerQuestionDialog_answerDefinitionDialog_component__WEBPACK_IMPORTED_MODULE_13__["AnswerDefinitionDialogComponent"] },
    { path: 'addQuestionDialog', component: _question_addQuestionDialog_addQuestionDialog_component__WEBPACK_IMPORTED_MODULE_14__["AddQuestionDialogComponent"] },
    { path: 'units/:unitId/itineraries/:itineraryId/definitionQuestion/:questionId', component: _question_definitionQuestion_definitionQuestion_component__WEBPACK_IMPORTED_MODULE_4__["DefinitionQuestionComponent"] },
    { path: 'units/:unitId/itineraries/:itineraryId/listQuestion/:questionId', component: _question_listQuestion_listQuestion_component__WEBPACK_IMPORTED_MODULE_5__["ListQuestionComponent"] },
    { path: 'units/:unitId/itineraries/:itineraryId/testQuestion/:questionId', component: _question_testQuestion_testQuestion_component__WEBPACK_IMPORTED_MODULE_8__["TestQuestionComponent"] },
    { path: 'question', component: _question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"] },
    { path: 'courses', component: _course_myCourses_component__WEBPACK_IMPORTED_MODULE_9__["MyCoursesComponent"] },
    { path: 'progress', component: _progress_module_progress_module_progress_component__WEBPACK_IMPORTED_MODULE_7__["ModuleProgressComponent"] },
    { path: 'newCourse', component: _course_newCourse_component__WEBPACK_IMPORTED_MODULE_10__["NewCourseComponent"] },
    { path: 'course/:courseId', component: _course_course_component__WEBPACK_IMPORTED_MODULE_20__["CourseComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// Strategy based on http://jasonwatmore.com/post/2018/09/07/angular-6-basic-http-authentication-tutorial-example
var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor() {
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user && user.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + user.authdata
                }
            });
        }
        return next.handle(request);
    };
    BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/error.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/error.interceptor.ts ***!
  \*******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/auth/login.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(loginService) {
        this.loginService = loginService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.loginService.removeCurrentUser();
                //location.reload(true);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/login.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth/login.service.ts ***!
  \***************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LOGIN_URL = 'api/login';
var LOGOUT_URL = 'api/logout';
var CURRENT_USER_ITEM = 'currentUser';
var ROLE_ADMIN = 'ROLE_ADMIN';
var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.isLogged = false;
        this.isAdmin = false;
        var user = JSON.parse(localStorage.getItem(CURRENT_USER_ITEM));
        if (user) {
            this.setCurrentUser(user);
        }
    }
    LoginService.prototype.login = function (user, pass) {
        var _this = this;
        var auth = window.btoa(user + ':' + pass);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Basic ' + auth,
            'X-Requested-With': 'XMLHttpRequest',
        });
        return this.http.get(LOGIN_URL, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                _this.setCurrentUser(user);
                user.authdata = auth;
                localStorage.setItem(CURRENT_USER_ITEM, JSON.stringify(user));
            }
            return user;
        }));
    };
    LoginService.prototype.setCurrentUser = function (user) {
        this.isLogged = true;
        this.user = user;
        this.isAdmin = this.user.roles.indexOf(ROLE_ADMIN) !== -1;
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        return this.http.get(LOGOUT_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.removeCurrentUser();
            return response;
        }));
    };
    LoginService.prototype.getCurrentUser = function () {
        return this.user;
    };
    LoginService.prototype.removeCurrentUser = function () {
        localStorage.removeItem(CURRENT_USER_ITEM);
        this.isLogged = false;
        this.isAdmin = false;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  left: 0;\r\n  right: 0;\r\n  top: 2rem;\r\n  padding: 2rem;\r\n  margin: 2rem;\r\n}\r\n\r\n.saved-card {\r\n  background-color: #fdf7ff;\r\n}\r\n\r\n.new-card {\r\n  background-color: #f5fbff;\r\n}\r\n\r\n.card-input-container {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.card-input {\r\n  width: 100%;\r\n  resize: none;\r\n}\r\n\r\n#card-title {\r\n  width: 80%;\r\n}\r\n\r\n#delete-card-button {\r\n  color: indianred;\r\n  position: absolute;\r\n  right: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#empty-message {\r\n  margin-top: 10rem;\r\n  text-align: center;\r\n}\r\n\r\n#add-button {\r\n  position: fixed;\r\n  color: white;\r\n  background-color: #7d3c90;\r\n  top: 3.45rem;\r\n  z-index: 501;\r\n  right: 1rem;\r\n}\r\n\r\n#add-button:hover {\r\n  background-color: #a769b8;\r\n}\r\n\r\n#spinner-container {\r\n  position: fixed;\r\n  width: calc(100% - 30rem);\r\n  right: 8rem;\r\n  top: 3.6rem;\r\n  z-index: 9999;\r\n  text-align: center;\r\n}\r\n\r\n#spinner {\r\n  display: inline;\r\n  z-index: 10000;\r\n  height: 1.8rem;\r\n  width: 1.8rem;\r\n}\r\n\r\n#spinner-text {\r\n  position: fixed;\r\n  display: inline;\r\n  z-index: 10000;\r\n  color: #ffffff;\r\n  margin: 0.35rem 0.5rem 0.35rem 0.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxxQ0FBcUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMnJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1hcmdpbjogMnJlbTtcclxufVxyXG5cclxuLnNhdmVkLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGY3ZmY7XHJcbn1cclxuXHJcbi5uZXctY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZmJmZjtcclxufVxyXG5cclxuLmNhcmQtaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4jY2FyZC10aXRsZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuI2RlbGV0ZS1jYXJkLWJ1dHRvbiB7XHJcbiAgY29sb3I6IGluZGlhbnJlZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZW1wdHktbWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMTByZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYWRkLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QzYzkwO1xyXG4gIHRvcDogMy40NXJlbTtcclxuICB6LWluZGV4OiA1MDE7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbiNhZGQtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc2OWI4O1xyXG59XHJcblxyXG4jc3Bpbm5lci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzByZW0pO1xyXG4gIHJpZ2h0OiA4cmVtO1xyXG4gIHRvcDogMy42cmVtO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIGhlaWdodDogMS44cmVtO1xyXG4gIHdpZHRoOiAxLjhyZW07XHJcbn1cclxuXHJcbiNzcGlubmVyLXRleHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiAwLjM1cmVtIDAuNXJlbSAwLjM1cmVtIDAuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <button id=\"add-button\" mat-button (click)=\"addCard()\">\r\n      <mat-icon>add</mat-icon>\r\n      Añadir ficha\r\n    </button>\r\n\r\n    <div id=\"spinner-container\" *ngIf=\"showSpinner\">\r\n      <img id=\"spinner\" src=\"../../assets/img/spinner.gif\">\r\n      <span id=\"spinner-text\">Cargando...</span>\r\n    </div>\r\n\r\n    <div #cardList>\r\n      <mat-card [ngClass]=\"card.id != 0 ? 'card saved-card' : 'card new-card'\" *ngFor = \"let card of cards\">\r\n        <mat-form-field id=\"card-title\" class=\"example-full-width card-input card-input-container\">\r\n          <input matInput class=\"card-input\" placeholder=\"Título\" [(ngModel)]=\"card.name\" required (change)=\"save(card)\">\r\n        </mat-form-field>\r\n        <mat-icon id=\"delete-card-button\" (click)=\"deleteCard(card.id)\" matTooltip=\"Eliminar\">delete</mat-icon>\r\n        <mat-form-field class=\"example-full-width card-input card-input-area\">\r\n          <textarea matInput class=\"card-input\" placeholder=\"Contenido\" required (change)=\"save(card)\" (input)=\"changeTextArea($event)\" [(ngModel)]=\"card.content\"></textarea>\r\n        </mat-form-field>\r\n      </mat-card>\r\n      <div *ngIf=\"cards.length == 0\" id=\"empty-message\">\r\n        Esta unidad no tiene ninguna ficha\r\n      </div>\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.service */ "./src/app/card/card.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmAction/confirm-action.component */ "./src/app/confirmAction/confirm-action.component.ts");







var CardComponent = /** @class */ (function () {
    function CardComponent(router, activatedRoute, cardService, unitService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cardService = cardService;
        this.unitService = unitService;
        this.dialog = dialog;
        this.cards = [];
        this.showSpinner = false;
        this.confirmText = 'Se eliminará la ficha permanentemente';
        this.button1 = 'Cancelar';
        this.button2 = 'Borrar';
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.unitId = params.unitId;
            _this.showSpinner = true;
            _this.unitService.getUnit(_this.unitId).subscribe(function (data) {
                _this.unit = data;
                _this.cards = _this.unit.cards;
                _this.showSpinner = false;
            });
        });
    };
    CardComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.cardList.nativeElement.childNodes.forEach(function (card) {
            try {
                _this.fitContent(card.childNodes[2].firstChild.firstChild.childNodes[2].firstChild);
            }
            catch (e) { }
        });
    };
    CardComponent.prototype.addCard = function () {
        if ((this.cards.length === 0) || (this.cards[0].id !== 0) || (this.cards[0].name && this.cards[0].content)) {
            this.cards.unshift({
                id: 0,
                name: '',
                content: ''
            });
        }
        this.focusNewCard();
    };
    CardComponent.prototype.focusNewCard = function () {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };
    CardComponent.prototype.getCardIndex = function (id) {
        var index = -1;
        this.cards.forEach(function (card, i) {
            if (card.id === id) {
                index = i;
            }
        });
        return index;
    };
    CardComponent.prototype.deleteCard = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmActionComponent"], {
            data: { confirmText: this.confirmText, button1: this.button1, button2: this.button2 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.showSpinner = true;
                if (id === 0) {
                    _this.cards.splice(0, 1);
                    _this.showSpinner = false;
                }
                else {
                    _this.cardService.deleteCard(_this.unitId, id).subscribe(function () {
                        _this.cards.splice(_this.getCardIndex(id), 1);
                        _this.showSpinner = false;
                    });
                }
            }
        });
    };
    CardComponent.prototype.save = function (card) {
        var _this = this;
        if (card.name && card.content) {
            this.showSpinner = true;
            if (card.id === 0) {
                this.cardService.create(this.unitId, card).subscribe(function (createdCard) {
                    card.id = createdCard.id;
                    _this.showSpinner = false;
                });
            }
            else {
                this.cardService.save(this.unitId, card).subscribe(function () {
                    _this.showSpinner = false;
                }, function (error) {
                    console.error(error);
                });
            }
        }
    };
    CardComponent.prototype.changeTextArea = function (event) {
        this.fitContent(event.target);
    };
    CardComponent.prototype.fitContent = function (textArea) {
        textArea.style.overflow = 'hidden';
        textArea.style.height = '0px';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('cardList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], CardComponent.prototype, "cardList", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card/card.service.ts":
/*!**************************************!*\
  !*** ./src/app/card/card.service.ts ***!
  \**************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CardService = /** @class */ (function () {
    function CardService(http) {
        this.http = http;
    }
    CardService.prototype.deleteCard = function (unitId, cardId) {
        return this.http.delete('/api/units/' + unitId + '/cards/' + cardId);
    };
    CardService.prototype.create = function (unitId, card) {
        var body = JSON.stringify(card);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/units/' + unitId + '/cards/', body, { headers: headers });
    };
    CardService.prototype.save = function (unitId, card) {
        var body = JSON.stringify(card);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put('/api/units/' + unitId + '/cards/' + card.id, body, { headers: headers });
    };
    CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/confirmAction/confirm-action.component.css":
/*!************************************************************!*\
  !*** ./src/app/confirmAction/confirm-action.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dialog {\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  text-align: center;\r\n}\r\n\r\n#info {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n#discard-button {\r\n  background-color: #f9c4c4;\r\n  margin-left: 1.5rem;\r\n  margin-right: 1.5rem;\r\n}\r\n\r\n#discard-button:hover {\r\n  background-color: #e4b3b3;\r\n}\r\n\r\n#save-button {\r\n  background-color: #e7e3f9;\r\n  margin-left: 1.5rem;\r\n  margin-right: 1.5rem;\r\n}\r\n\r\n#save-button {\r\n  background-color: #d7d4e8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybUFjdGlvbi9jb25maXJtLWFjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb25maXJtQWN0aW9uL2NvbmZpcm0tYWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlhbG9nIHtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbSAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2luZm8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbiNkaXNjYXJkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YzRjNDtcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4jZGlzY2FyZC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGIzYjM7XHJcbn1cclxuXHJcbiNzYXZlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTNmOTtcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4jc2F2ZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZTg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/confirmAction/confirm-action.component.html":
/*!*************************************************************!*\
  !*** ./src/app/confirmAction/confirm-action.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\r\n  <div id=\"info\">{{data.confirmText}}</div>\r\n  <button id=\"discard-button\" mat-button (click)=\"saveChanges()\">{{data.button2}}</button>\r\n  <button id=\"save-button\" mat-button (click)=\"onNoClick()\">{{data.button1}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/confirmAction/confirm-action.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/confirmAction/confirm-action.component.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmActionComponent", function() { return ConfirmActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ConfirmActionComponent = /** @class */ (function () {
    function ConfirmActionComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmActionComponent.prototype.onNoClick = function () {
        this.dialogRef.close(2);
    };
    ConfirmActionComponent.prototype.saveChanges = function () {
        this.dialogRef.close(1);
    };
    ConfirmActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./confirm-action.component.html */ "./src/app/confirmAction/confirm-action.component.html"),
            styles: [__webpack_require__(/*! ./confirm-action.component.css */ "./src/app/confirmAction/confirm-action.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmActionComponent);
    return ConfirmActionComponent;
}());



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-basis: 100%;\r\n  flex: 1;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  text-align: center;\r\n}\r\n\r\n.module-column {\r\n  width: 66%;\r\n  padding: 0 10px 0 0;\r\n  float: left;\r\n}\r\n\r\n.student-column {\r\n  width: 33%;\r\n  padding: 0 10px 0 0;\r\n  float: right;\r\n}\r\n\r\n.result {\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n  margin: 0 -0.6em 0 -0.6em;\r\n  border-top: 1px solid #e5e9f0;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.result-wrapper {\r\n  position: absolute;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  height: 200px;\r\n  border: lightgrey;\r\n}\r\n\r\n#module-name:hover, #user-result:hover{\r\n  background: lightgrey;\r\n}\r\n\r\n.green-color{\r\n  color: green\r\n}\r\n\r\n.red-color{\r\n  color: red\r\n}\r\n\r\n.pointer-cursor{\r\n  cursor: pointer\r\n}\r\n\r\n.indianred-color{\r\n  color: indianred\r\n}\r\n\r\n.delete-course {\r\n  color: indianred;\r\n  cursor: pointer;\r\n  padding: 0 0 0 1rem;\r\n}\r\n\r\n.edit-course{\r\n  cursor: pointer;\r\n}\r\n\r\n.save-course{\r\n  background-color: #7d3c90;\r\n  color: #ffffff\r\n}\r\n\r\n.bottom-margin{\r\n  margin-bottom: 10%;\r\n  text-align: center;\r\n}\r\n\r\n.center-align {\r\n  text-align: center;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n\r\n.courses-title {\r\n  margin-top: 5rem;\r\n}\r\n\r\n.title {\r\n  margin-top: 4rem;\r\n}\r\n\r\n.course-button {\r\n  width: 90%;\r\n  padding: 1rem 0 1rem 2rem;\r\n  text-align: left;\r\n}\r\n\r\n.admin-course-button {\r\n  background-color: #f9f2fd;\r\n}\r\n\r\n.user-course-button {\r\n  background-color: #eaeefd;\r\n}\r\n\r\n.courses-list {\r\n  position: absolute;\r\n  width: 70%;\r\n  left: 15%;\r\n  top: 10rem;\r\n}\r\n\r\n#course-search {\r\n  position: absolute;\r\n  top: 4rem;\r\n  width: 40%;\r\n  left: 25%;\r\n}\r\n\r\n#new-course-button {\r\n  position: absolute;\r\n  background-color: #efe1fd;\r\n  top: 4rem;\r\n  left: 65%;\r\n  right: 25%;\r\n  margin: 1rem 2% 0 2%;\r\n}\r\n\r\n#search {\r\n  width: 100%;\r\n}\r\n\r\n.course-form {\r\n  width: 75%\r\n}\r\n\r\n.tab {\r\n  background-color: #7d3c90;\r\n  color: #ffffff;\r\n  padding: 0.3rem 0 0.3rem 3.5rem;\r\n  position: relative;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  margin-bottom: 0.5rem;\r\n  text-align: left;\r\n  height: 3rem;\r\n}\r\n\r\n.student-tab{\r\n  width: 60%;\r\n}\r\n\r\n.tab-group{\r\n  margin-left: 3rem\r\n}\r\n\r\n.tab:hover {\r\n  background-color: #a769b8;\r\n}\r\n\r\n.activeTab {\r\n  background-color: #a769b8;\r\n}\r\n\r\n.tab-text {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.tab-icon {\r\n  position: absolute;\r\n  left: 1.37rem;\r\n  margin-top: 0.4rem;\r\n}\r\n\r\n.tab-icon-without-menu {\r\n  position: absolute;\r\n  left: 1.37rem;\r\n  top: 0.78rem;\r\n}\r\n\r\n#course-content {\r\n  margin-top: 6rem;\r\n  position: absolute;\r\n  right: 0;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.with-menu {\r\n  width: calc(100% - 21.5rem);\r\n}\r\n\r\n.without-menu {\r\n  width: calc(100% - 6.2rem);\r\n}\r\n\r\n#lateral-panel {\r\n  position: fixed;\r\n  top: 3rem;\r\n  bottom: 0;\r\n  background-color: #5d306a;\r\n  padding: 1rem;\r\n}\r\n\r\n#hide-menu-button {\r\n  z-index: 501;\r\n  top: 3rem;\r\n  position: fixed;\r\n  color: #ffffff;\r\n  padding: 0.8rem;\r\n  border-bottom-right-radius: 1rem;\r\n  border-top-right-radius: 1rem;\r\n  background-image: linear-gradient(to right, #5d306a 0%, #3e2047 100%);\r\n  cursor: pointer;\r\n}\r\n\r\n.show-hide-menu-button {\r\n  left: calc(21rem);\r\n}\r\n\r\n.hidden-hide-menu-button {\r\n  left: calc(5.2rem);\r\n}\r\n\r\n.left-zero {\r\n  width: 20rem;\r\n}\r\n\r\n.hidden-menu {\r\n  width: 4.2rem;\r\n}\r\n\r\n#top-panel {\r\n  position: fixed;\r\n  top: 3rem;\r\n  right: 0;\r\n  height: 2.5rem;\r\n  z-index: 500;\r\n  background-color: #5d306a;\r\n  text-align: right;\r\n  padding: 0.3rem 0 0.3rem 0;\r\n}\r\n\r\n.example-tree-invisible {\r\n  display: none;\r\n}\r\n\r\n.toolsBar {\r\n  height: 6.2rem;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.admin {\r\n  background-color: #5d306a;\r\n}\r\n\r\n.student {\r\n  background-color: #30376a;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-invalid .mat-input-element, .mat-warn .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-label {\r\n  color: rgba(0,0,0,.6)!important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IscUVBQXFFO0VBQ3JFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixjQUFjO0VBQ2QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kdWxlLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc3R1ZGVudC1jb2x1bW4ge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMCAtMC42ZW0gMCAtMC42ZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU5ZjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnJlc3VsdC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuI21vZHVsZS1uYW1lOmhvdmVyLCAjdXNlci1yZXN1bHQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG59XHJcblxyXG4uZ3JlZW4tY29sb3J7XHJcbiAgY29sb3I6IGdyZWVuXHJcbn1cclxuXHJcbi5yZWQtY29sb3J7XHJcbiAgY29sb3I6IHJlZFxyXG59XHJcblxyXG4ucG9pbnRlci1jdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5pbmRpYW5yZWQtY29sb3J7XHJcbiAgY29sb3I6IGluZGlhbnJlZFxyXG59XHJcblxyXG4uZGVsZXRlLWNvdXJzZSB7XHJcbiAgY29sb3I6IGluZGlhbnJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMCAwIDAgMXJlbTtcclxufVxyXG5cclxuLmVkaXQtY291cnNle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNhdmUtY291cnNle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDNjOTA7XHJcbiAgY29sb3I6ICNmZmZmZmZcclxufVxyXG5cclxuLmJvdHRvbS1tYXJnaW57XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlci1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdXJzZXMtdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG5cclxuLmNvdXJzZS1idXR0b24ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMnJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYWRtaW4tY291cnNlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjJmZDtcclxufVxyXG5cclxuLnVzZXItY291cnNlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWVmZDtcclxufVxyXG5cclxuLmNvdXJzZXMtbGlzdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHRvcDogMTByZW07XHJcbn1cclxuXHJcbiNjb3Vyc2Utc2VhcmNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cmVtO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbGVmdDogMjUlO1xyXG59XHJcblxyXG4jbmV3LWNvdXJzZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlMWZkO1xyXG4gIHRvcDogNHJlbTtcclxuICBsZWZ0OiA2NSU7XHJcbiAgcmlnaHQ6IDI1JTtcclxuICBtYXJnaW46IDFyZW0gMiUgMCAyJTtcclxufVxyXG5cclxuI3NlYXJjaCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb3Vyc2UtZm9ybSB7XHJcbiAgd2lkdGg6IDc1JVxyXG59XHJcblxyXG4udGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QzYzkwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwIDAuM3JlbSAzLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBoZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5zdHVkZW50LXRhYntcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4udGFiLWdyb3Vwe1xyXG4gIG1hcmdpbi1sZWZ0OiAzcmVtXHJcbn1cclxuXHJcbi50YWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzY5Yjg7XHJcbn1cclxuXHJcbi5hY3RpdmVUYWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzY5Yjg7XHJcbn1cclxuXHJcbi50YWItdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnRhYi1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMS4zN3JlbTtcclxuICBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbn1cclxuXHJcbi50YWItaWNvbi13aXRob3V0LW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxLjM3cmVtO1xyXG4gIHRvcDogMC43OHJlbTtcclxufVxyXG5cclxuI2NvdXJzZS1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLndpdGgtbWVudSB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIxLjVyZW0pO1xyXG59XHJcblxyXG4ud2l0aG91dC1tZW51IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNi4ycmVtKTtcclxufVxyXG5cclxuI2xhdGVyYWwtcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDNyZW07XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDMwNmE7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuI2hpZGUtbWVudS1idXR0b24ge1xyXG4gIHotaW5kZXg6IDUwMTtcclxuICB0b3A6IDNyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDAuOHJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1ZDMwNmEgMCUsICMzZTIwNDcgMTAwJSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2hvdy1oaWRlLW1lbnUtYnV0dG9uIHtcclxuICBsZWZ0OiBjYWxjKDIxcmVtKTtcclxufVxyXG5cclxuLmhpZGRlbi1oaWRlLW1lbnUtYnV0dG9uIHtcclxuICBsZWZ0OiBjYWxjKDUuMnJlbSk7XHJcbn1cclxuXHJcbi5sZWZ0LXplcm8ge1xyXG4gIHdpZHRoOiAyMHJlbTtcclxufVxyXG5cclxuLmhpZGRlbi1tZW51IHtcclxuICB3aWR0aDogNC4ycmVtO1xyXG59XHJcblxyXG4jdG9wLXBhbmVsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzcmVtO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHotaW5kZXg6IDUwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzMDZhO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwIDAuM3JlbSAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvb2xzQmFyIHtcclxuICBoZWlnaHQ6IDYuMnJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLmFkbWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzMDZhO1xyXG59XHJcblxyXG4uc3R1ZGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzc2YTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCwgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjYpIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n<span *ngIf=\"this.loginService.isAdmin\">\r\n  <div id=\"lateral-panel\" [ngClass]=\"showMenu ? 'left-zero' : 'hidden-menu'\">\r\n\r\n    <button [ngClass]=\"activeTab == 0 ? 'tab activeTab mat-button' : 'tab mat-button'\" (click)=\"activateTab(0)\">\r\n      <mat-icon [ngClass]=\"showMenu ? 'tab-icon' : 'tab-icon-without-menu'\">description</mat-icon>\r\n      <span class=\"tab-text\" *ngIf=\"showMenu\">Contenido</span>\r\n    </button>\r\n\r\n    <button [ngClass]=\"activeTab == 1 ? 'tab activeTab mat-button' : 'tab mat-button'\" (click)=\"activateTab(1)\">\r\n      <mat-icon [ngClass]=\"showMenu ? 'tab-icon' : 'tab-icon-without-menu'\">bar_chart</mat-icon>\r\n      <span class=\"tab-text\" *ngIf=\"showMenu\">Seguimiento del módulo</span>\r\n    </button>\r\n\r\n    <button [ngClass]=\"activeTab == 2 ? 'tab activeTab mat-button' : 'tab mat-button'\" (click)=\"activateTab(2)\">\r\n      <mat-icon [ngClass]=\"showMenu ? 'tab-icon' : 'tab-icon-without-menu'\">bar_chart</mat-icon>\r\n      <span class=\"tab-text\" *ngIf=\"showMenu\">Seguimiento de la clase</span>\r\n    </button>\r\n\r\n  </div>\r\n  <mat-icon id=\"hide-menu-button\" [ngClass]=\"showMenu ? 'show-hide-menu-button' : 'hidden-hide-menu-button'\" (click)=\"setShowMenu(!showMenu)\">reorder</mat-icon>\r\n\r\n  <div id=\"top-panel\" [ngClass]=\"showMenu ? 'with-menu' : 'without-menu'\"></div>\r\n\r\n  <div id=\"course-content\" [ngClass]=\"showMenu ? 'with-menu' : 'without-menu'\">\r\n    <div *ngIf=\"this.activeTab == 0\">\r\n      <h1 class=\"tab-group\">\r\n        {{course?.name}}\r\n        <div class=\"mat-button\" (click)=\"openEditCourseDialog()\">\r\n          <mat-icon>edit</mat-icon>\r\n        </div>\r\n      </h1>\r\n\r\n      <mat-tab-group class=\"tab-group\">\r\n        <mat-tab label=\"Itinerario Formativo\">\r\n\r\n          <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree menu-margin\">\r\n            <mat-tree-node *matTreeNodeDef=\"let node1\" matTreeNodeToggle>\r\n                  <span class=\"mat-tree-node\" id=\"{{node1.name}}\">\r\n                    <button mat-icon-button disabled></button>\r\n                    <mat-card class=\"lesson-button\">\r\n                      {{node1?.name}}\r\n                    </mat-card>\r\n                  </span>\r\n            </mat-tree-node>\r\n            <mat-nested-tree-node *matTreeNodeDef=\"let node2; when: hasChild\">\r\n                  <span id=\"{{node2.name}}\">\r\n                    <div class=\"mat-tree-node\">\r\n                      <button mat-icon-button matTreeNodeToggle\r\n                              [attr.aria-label]=\"'toggle ' + node2?.name\">\r\n                        <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                          {{treeControl.isExpanded(node2) ? 'expand_more' : 'chevron_right'}}\r\n                        </mat-icon>\r\n                      </button>\r\n                      <h3>{{node2?.name}}</h3>\r\n                    </div>\r\n                    <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node2)\">\r\n                      <ng-container matTreeNodeOutlet></ng-container>\r\n                    </ul>\r\n                  </span>\r\n            </mat-nested-tree-node>\r\n          </mat-tree>\r\n        </mat-tab>\r\n        <mat-tab label=\"Alumnos\">\r\n          <h2>Alumnos del curso</h2>\r\n          <span *ngFor=\"let student of this.course?.students\">\r\n              <div class=\"tab student-tab mat-button\">\r\n                <mat-icon class=\"tab-icon\">account_circle</mat-icon>\r\n                {{student.name}}\r\n              </div>\r\n            </span>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n    </div>\r\n\r\n    <app-module-progress *ngIf=\"activeTab==1\"></app-module-progress>\r\n    <app-class-progress *ngIf=\"activeTab==2\"></app-class-progress>\r\n\r\n  </div>\r\n</span>\r\n\r\n<span *ngIf=\"!this.loginService.isAdmin\">\r\n\r\n</span>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course.service */ "./src/app/course/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tab/tab.service */ "./src/app/tab/tab.service.ts");
/* harmony import */ var _newCourse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newCourse.component */ "./src/app/course/newCourse.component.ts");









var CourseComponent = /** @class */ (function () {
    function CourseComponent(loginService, courseService, activatedRoute, router, tabService, dialog) {
        this.loginService = loginService;
        this.courseService = courseService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tabService = tabService;
        this.dialog = dialog;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["NestedTreeControl"](function (node) { return !!node && node.blocks; });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeNestedDataSource"]();
        this.showMenu = true;
        this.activeTab = 0;
        this.hasChild = function (_, node) { return !!node && !!node.blocks && node.blocks.length > 0; };
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.courseId;
            if (_this.loginService.isAdmin) {
                _this.courseService.getCourse(_this.id).subscribe(function (data) {
                    _this.course = data;
                    _this.dataSource.data = _this.course.module.blocks;
                    _this.tabService.setCourse(_this.course.name, _this.course.id);
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                _this.courseService.addNewStudent(_this.id, _this.loginService.getCurrentUser()).subscribe(function (data) {
                    _this.router.navigate(['/courses']);
                }, function (error) { console.log(error); });
            }
        });
    };
    CourseComponent.prototype.activateTab = function (tab) {
        this.activeTab = tab;
    };
    CourseComponent.prototype.setShowMenu = function (showMenu) {
        this.showMenu = showMenu;
    };
    CourseComponent.prototype.openEditCourseDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_newCourse_component__WEBPACK_IMPORTED_MODULE_8__["NewCourseComponent"], {
            width: '600px',
            data: { data: this.course.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.ngOnInit();
        });
    };
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _tab_tab_service__WEBPACK_IMPORTED_MODULE_7__["TabService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/course/course.service.ts":
/*!******************************************!*\
  !*** ./src/app/course/course.service.ts ***!
  \******************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
    }
    CourseService.prototype.getCourse = function (id) {
        return this.http.get('/api/course/' + id);
    };
    CourseService.prototype.addNewStudent = function (id, student) {
        var body = JSON.stringify(student);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/course/' + id + '/students/', body, { headers: headers });
    };
    CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/course/myCourses.component.html":
/*!*************************************************!*\
  !*** ./src/app/course/myCourses.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n\r\n  <div id=\"course-search\">\r\n    <mat-form-field appearance=\"outline\" id=\"search\">\r\n      <mat-label>Buscar curso</mat-label>\r\n      <input id=\"search-input\" matInput [(ngModel)]=\"searchField\" (ngModelChange)=\"search()\"/>\r\n    </mat-form-field>\r\n  </div>\r\n  <button mat-button *ngIf=\"this.loginService.isAdmin\" id=\"new-course-button\" (click)=\"openAddCourseDialog()\">\r\n    <mat-icon>add</mat-icon>\r\n    Nuevo Curso\r\n  </button>\r\n\r\n  <div class=\"courses-list center-align\">\r\n    <span *ngFor=\"let course of showingCourses\">\r\n      <span *ngIf=\"this.loginService.isAdmin\">\r\n        <button mat-button  [ngClass]=\"loginService.isAdmin ? 'course-button admin-course-button' : 'course-button user-course-button'\" [routerLink]=\"['/course', course.id]\">\r\n          {{course.name}}\r\n        </button>\r\n      </span>\r\n      <span *ngIf=\"!this.loginService.isAdmin\">\r\n        <button mat-button  [ngClass]=\"loginService.isAdmin ? 'course-button admin-course-button' : 'course-button user-course-button'\" [routerLink]=\"['/course', course.id, 'modules', course.module.id]\">\r\n          {{course.name}}\r\n        </button>\r\n      </span>\r\n      <mat-icon *ngIf=\"this.loginService.isAdmin\" class=\"delete-course\" (click)=\"deleteCourse(course)\">delete</mat-icon>\r\n      <p></p>\r\n    </span>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/course/myCourses.component.ts":
/*!***********************************************!*\
  !*** ./src/app/course/myCourses.component.ts ***!
  \***********************************************/
/*! exports provided: MyCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesComponent", function() { return MyCoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _myCourses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myCourses.service */ "./src/app/course/myCourses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab/tab.service */ "./src/app/tab/tab.service.ts");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _newCourse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newCourse.component */ "./src/app/course/newCourse.component.ts");









var MyCoursesComponent = /** @class */ (function () {
    function MyCoursesComponent(loginService, courseService, router, tabService, dialogService, dialog) {
        this.loginService = loginService;
        this.courseService = courseService;
        this.router = router;
        this.tabService = tabService;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.searchField = '';
        this.courses = [];
        this.showingCourses = [];
    }
    MyCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabService.setCourses();
        if (this.loginService.isAdmin) {
            this.courseService.getTeacherCourses(this.loginService.getCurrentUser().id).subscribe(function (data) {
                _this.courses = data;
                _this.showingCourses = _this.courses;
            }, function (error) { console.log(error); });
        }
        else {
            this.courseService.getUserCourses(this.loginService.getCurrentUser().id).subscribe(function (data) {
                _this.courses = data;
                _this.showingCourses = _this.courses;
            }, function (error) { console.log(error); });
        }
    };
    MyCoursesComponent.prototype.deleteCourse = function (course) {
        var _this = this;
        this.dialogService.openConfirm({
            message: '¿Seguro que desea eliminar el curso ' + course.name + ' ?',
            title: 'Confirmación'
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.courseService.deleteCourse(course.id).subscribe(function (_) {
                    _this.courses.splice(_this.courses.indexOf(course), 1);
                }, function (error) { console.log(error); });
            }
        });
    };
    MyCoursesComponent.prototype.search = function () {
        var _this = this;
        if (this.searchField !== '') {
            this.courseService.searchByNameContaining(this.searchField).subscribe(function (data) {
                _this.showingCourses = data;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.showingCourses = this.courses;
        }
    };
    MyCoursesComponent.prototype.openAddCourseDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_newCourse_component__WEBPACK_IMPORTED_MODULE_8__["NewCourseComponent"], {
            width: '600px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result === 1) {
                _this.ngOnInit();
            }
        });
    };
    MyCoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./myCourses.component.html */ "./src/app/course/myCourses.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _myCourses_service__WEBPACK_IMPORTED_MODULE_3__["MyCoursesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _tab_tab_service__WEBPACK_IMPORTED_MODULE_5__["TabService"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_6__["TdDialogService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], MyCoursesComponent);
    return MyCoursesComponent;
}());



/***/ }),

/***/ "./src/app/course/myCourses.service.ts":
/*!*********************************************!*\
  !*** ./src/app/course/myCourses.service.ts ***!
  \*********************************************/
/*! exports provided: MyCoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesService", function() { return MyCoursesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MyCoursesService = /** @class */ (function () {
    function MyCoursesService(http) {
        this.http = http;
    }
    MyCoursesService.prototype.getUserCourses = function (id) {
        return this.http.get('/api/course/user/' + id);
    };
    MyCoursesService.prototype.getTeacherCourses = function (id) {
        return this.http.get('/api/course/teacher/' + id);
    };
    MyCoursesService.prototype.deleteCourse = function (id) {
        return this.http.delete('api/course/' + id);
    };
    MyCoursesService.prototype.searchByNameContaining = function (name) {
        return this.http.get('api/course/search/' + name);
    };
    MyCoursesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MyCoursesService);
    return MyCoursesService;
}());



/***/ }),

/***/ "./src/app/course/newCourse.component.html":
/*!*************************************************!*\
  !*** ./src/app/course/newCourse.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body class=\"center-align\">\r\n  <div class=\"center-align\">\r\n    <img src=\"../../../assets/img/spinner.gif\" id=\"spinner\" class=\"top-margin\" *ngIf=\"showSpinner\">\r\n\r\n    <span *ngIf=\"!this.showSpinner\">\r\n      <h1 mat-dialog-title class=\"center-align title\" *ngIf=\"this.courseId == undefined\">Nuevo curso</h1>\r\n      <h1 mat-dialog-title class=\"center-align title\" *ngIf=\"this.courseId != undefined\">{{this.course?.name}}</h1>\r\n\r\n      <div mat-dialog-content>\r\n\r\n        <form class=\"center-align\" name=\"newCourseName\">\r\n          <mat-form-field class=\"course-form\">\r\n            <input matInput placeholder=\"Nombre del curso\" [(ngModel)]=\"courseName\" name=\"name\" required>\r\n          </mat-form-field>\r\n        </form>\r\n\r\n        <form name=\"newCourseDesc\" class=\"center-align\">\r\n          <mat-form-field class=\"course-form\">\r\n            <textarea matInput placeholder=\"Descripción del curso\" [(ngModel)]=\"courseDescription\" name=\"description\" required></textarea>\r\n          </mat-form-field>\r\n        </form>\r\n        <h3>Itinerario del curso</h3>\r\n        <div class=\"mat-button\" style=\"background-color: #7d3c90; color: #ffffff;\" (click)=\"addModule()\">\r\n          Seleccionar Itinerario\r\n        </div>\r\n\r\n        <h5>Itinerario seleccionado</h5>\r\n        <span>{{this.chosenModule?.name}}</span>\r\n        <div *ngIf=\"this.chosenModule == undefined\">\r\n          <p>Ningún itinerario seleccionado</p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div mat-dialog-actions>\r\n        <button mat-button (click)=\"cancel()\">Cancelar</button>\r\n        <button (click)=\"save()\" class=\"mat-button save-course\">\r\n          Guardar\r\n        </button>\r\n      </div>\r\n    </span>\r\n\r\n  </div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/course/newCourse.component.ts":
/*!***********************************************!*\
  !*** ./src/app/course/newCourse.component.ts ***!
  \***********************************************/
/*! exports provided: NewCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCourseComponent", function() { return NewCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _newCourse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newCourse.service */ "./src/app/course/newCourse.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab/tab.service */ "./src/app/tab/tab.service.ts");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _itinerary_module_moduleEditor_units_blocks_tool_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../itinerary/module/moduleEditor/units-blocks-tool.component */ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.ts");









var NewCourseComponent = /** @class */ (function () {
    function NewCourseComponent(courseService, loginService, routing, activatedRoute, tabService, unitService, bottomSheet, myCoursesDialogRef, courseDialogRef, snackBar, dialog, data) {
        this.courseService = courseService;
        this.loginService = loginService;
        this.routing = routing;
        this.activatedRoute = activatedRoute;
        this.tabService = tabService;
        this.unitService = unitService;
        this.bottomSheet = bottomSheet;
        this.myCoursesDialogRef = myCoursesDialogRef;
        this.courseDialogRef = courseDialogRef;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.data = data;
        this.courseName = '';
        this.courseDescription = '';
        this.showSpinner = false;
    }
    NewCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.data !== undefined) {
            this.courseId = this.data.data;
            this.courseService.getCourse(this.courseId).subscribe(function (data) {
                _this.course = data;
                _this.courseName = _this.course.name;
                _this.courseDescription = _this.course.description;
                _this.chosenModule = _this.course.module;
                _this.tabService.setCourse(_this.courseName, _this.courseId);
            }, function (error) { console.log(error); });
        }
    };
    NewCourseComponent.prototype.save = function () {
        var _this = this;
        if (this.courseName === '' || this.courseName === undefined) {
            this.openError('El nombre del curso no puede estar vacío', 'Entendido');
            return;
        }
        if (this.courseDescription === '' || this.courseDescription === undefined) {
            this.openError('La descripción del curso no puede estar vacía', 'Entendido');
            return;
        }
        if (this.chosenModule === undefined) {
            this.openError('Debes elegir un itinerario para el curso', 'Entendido');
            return;
        }
        if (this.courseId === undefined) {
            this.course = { name: this.courseName, description: this.courseDescription };
            this.course.teacher = this.loginService.getCurrentUser();
            this.course.module = this.chosenModule;
            this.courseService.postCourse(this.course).subscribe(function (data) {
                _this.copyUrl(data.id);
                _this.openError('La URL para acceder al curso ha sido copiada al portapapeles', 'Entendido');
                _this.myCoursesDialogRef.close(1);
            }, function (error) { console.log(error); });
        }
        else {
            this.course.name = this.courseName;
            this.course.description = this.courseDescription;
            this.course.teacher = this.loginService.getCurrentUser();
            this.course.module = this.chosenModule;
            this.showSpinner = true;
            this.courseService.putCourse(this.course, this.courseId).subscribe(function (data) {
                _this.courseDialogRef.close(1);
                _this.showSpinner = false;
            }, function (error) { console.log(error); });
        }
    };
    NewCourseComponent.prototype.cancel = function () {
        if (this.courseId === undefined) {
            this.myCoursesDialogRef.close(2);
        }
        else {
            this.courseDialogRef.close(2);
        }
    };
    NewCourseComponent.prototype.addModule = function () {
        var _this = this;
        this.bottomSheet.open(_itinerary_module_moduleEditor_units_blocks_tool_component__WEBPACK_IMPORTED_MODULE_8__["UnitsBlocksToolComponent"], {}).afterDismissed().subscribe(function (data) {
            _this.chosenModule = data;
        });
    };
    NewCourseComponent.prototype.openError = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    NewCourseComponent.prototype.copyUrl = function (id) {
        var url = window.location.href.substring(0, window.location.href.length - 1) + '/' + id;
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', (url));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    NewCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./newCourse.component.html */ "./src/app/course/newCourse.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](11, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_newCourse_service__WEBPACK_IMPORTED_MODULE_3__["NewCourseService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _tab_tab_service__WEBPACK_IMPORTED_MODULE_5__["TabService"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_6__["UnitService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], Object])
    ], NewCourseComponent);
    return NewCourseComponent;
}());



/***/ }),

/***/ "./src/app/course/newCourse.service.ts":
/*!*********************************************!*\
  !*** ./src/app/course/newCourse.service.ts ***!
  \*********************************************/
/*! exports provided: NewCourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCourseService", function() { return NewCourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewCourseService = /** @class */ (function () {
    function NewCourseService(http) {
        this.http = http;
    }
    NewCourseService.prototype.postCourse = function (course) {
        var body = JSON.stringify(course);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/course/', body, { headers: headers });
    };
    NewCourseService.prototype.putCourse = function (course, id) {
        var body = JSON.stringify(course);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put('/api/course/' + id, body, { headers: headers });
    };
    NewCourseService.prototype.getCourse = function (id) {
        return this.http.get('/api/course/' + id);
    };
    NewCourseService.prototype.searchUserByNameContaining = function (name) {
        return this.http.get('/api/student/search/' + name);
    };
    NewCourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewCourseService);
    return NewCourseService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-content {\r\n  position: absolute;\r\n  top: 6rem;\r\n  height: 30rem;\r\n  cursor: pointer;\r\n  background-size: 150%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  text-align: center;\r\n}\r\n\r\n.units {\r\n  left: 3rem;\r\n  right: calc(50% + 1.5rem);\r\n  background-image: url('home-units.png');\r\n}\r\n\r\n.courses {\r\n  right: 3rem;\r\n  left: calc(50% + 1.5rem);\r\n  background-image: url('home-courses.png');\r\n}\r\n\r\n.title {\r\n  padding-top: 1.5rem;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  color: rgba(30, 4, 47, 0.6);\r\n}\r\n\r\n.description {\r\n  padding-top: 0.5rem;\r\n  color: rgba(135, 99, 158, 0.6);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix1Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLHlDQUEwRDtBQUM1RDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDZyZW07XHJcbiAgaGVpZ2h0OiAzMHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVuaXRzIHtcclxuICBsZWZ0OiAzcmVtO1xyXG4gIHJpZ2h0OiBjYWxjKDUwJSArIDEuNXJlbSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9ob21lLXVuaXRzLnBuZ1wiKTtcclxufVxyXG5cclxuLmNvdXJzZXMge1xyXG4gIHJpZ2h0OiAzcmVtO1xyXG4gIGxlZnQ6IGNhbGMoNTAlICsgMS41cmVtKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2hvbWUtY291cnNlcy5wbmdcIik7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHJnYmEoMzAsIDQsIDQ3LCAwLjYpO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgY29sb3I6IHJnYmEoMTM1LCA5OSwgMTU4LCAwLjYpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n\r\n  <div style=\"margin-top: 10rem\">\r\n    <mat-card class=\"card-content units\" [routerLink]=\"['/unit']\">\r\n      <div class=\"title\">UNIDADES</div>\r\n      <div class=\"description\">Gestiona las unidades y su contenido</div>\r\n    </mat-card>\r\n    <mat-card class=\"card-content courses\" [routerLink]=\"['/courses']\">\r\n      <div class=\"title\">CURSOS</div>\r\n      <div class=\"description\">Modela el contenido en forma de cursos</div>\r\n    </mat-card>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab/tab.service */ "./src/app/tab/tab.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(tabService, loginService, router) {
        this.tabService = tabService;
        this.loginService = loginService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!this.loginService.isAdmin) {
            this.router.navigate(['/courses']);
        }
        this.tabService.setHome();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tab_tab_service__WEBPACK_IMPORTED_MODULE_2__["TabService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/lesson/lesson.component.css":
/*!*******************************************************!*\
  !*** ./src/app/itinerary/lesson/lesson.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lesson-search {\r\n  position: absolute;\r\n  top: 4rem;\r\n  width: 37%;\r\n  left: 32%;\r\n}\r\n\r\n#search {\r\n  width: 100%;\r\n}\r\n\r\n.new-lesson-button {\r\n  position: fixed;\r\n  color: white;\r\n  background-color: #7d3c90;\r\n  top: 3.45rem;\r\n  z-index: 501;\r\n  right: 1rem;\r\n}\r\n\r\n.tool:hover {\r\n  background-color: #a769b8;\r\n}\r\n\r\n.lessons-list {\r\n  position: absolute;\r\n  top: 10rem;\r\n  width: 50%;\r\n  left: 25%;\r\n}\r\n\r\n.lesson-button {\r\n  margin-top: 0.5rem;\r\n  width: 85%;\r\n  padding: 1rem 0 1rem 2rem;\r\n  text-align: left;\r\n}\r\n\r\n.admin-lesson-button {\r\n  background-color: #f9f2fd;\r\n}\r\n\r\n.user-lesson-button {\r\n  background-color: #eaeefd;\r\n}\r\n\r\n#options-lesson-button {\r\n  height: 4.2rem;\r\n  background-color: #f9f2fd;\r\n  margin-left: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#delete-option {\r\n  color: indianred;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-invalid .mat-input-element, .mat-warn .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-label {\r\n  color: rgba(0,0,0,.6)!important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L2xlc3Nvbi9sZXNzb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9sZXNzb24vbGVzc29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVzc29uLXNlYXJjaCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNHJlbTtcclxuICB3aWR0aDogMzclO1xyXG4gIGxlZnQ6IDMyJTtcclxufVxyXG5cclxuI3NlYXJjaCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXctbGVzc29uLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QzYzkwO1xyXG4gIHRvcDogMy40NXJlbTtcclxuICB6LWluZGV4OiA1MDE7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi50b29sOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc2OWI4O1xyXG59XHJcblxyXG4ubGVzc29ucy1saXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHJlbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmxlc3Nvbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICB3aWR0aDogODUlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDJyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmFkbWluLWxlc3Nvbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWYyZmQ7XHJcbn1cclxuXHJcbi51c2VyLWxlc3Nvbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVlZmQ7XHJcbn1cclxuXHJcbiNvcHRpb25zLWxlc3Nvbi1idXR0b24ge1xyXG4gIGhlaWdodDogNC4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWYyZmQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNkZWxldGUtb3B0aW9uIHtcclxuICBjb2xvcjogaW5kaWFucmVkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuICBjb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LCAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNikhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/itinerary/lesson/lesson.component.html":
/*!********************************************************!*\
  !*** ./src/app/itinerary/lesson/lesson.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <button mat-button *ngIf=\"this.loginService.isAdmin\" class=\"tool new-lesson-button\" (click)=\"addLesson()\">\r\n      <mat-icon>add</mat-icon>\r\n      Nueva Lección\r\n    </button>\r\n\r\n    <div id=\"lesson-search\">\r\n      <mat-form-field appearance=\"outline\" id=\"search\">\r\n        <mat-label>Buscar lección</mat-label>\r\n        <input id=\"search-input\" matInput (keyup)=\"searchLesson($event.target.value)\"/>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"lessons-list center-align\">\r\n        <span *ngFor=\"let lesson of lessonsResult\">\r\n          <button mat-button [ngClass]=\"loginService.isAdmin ? 'lesson-button admin-lesson-button' : 'lesson-button user-lesson-button'\" (click)=\"editLesson(lesson.id)\">\r\n            {{lesson.name}}\r\n          </button>\r\n          <button id=\"options-lesson-button\" mat-button matTooltip=\"Opciones\" [matTooltipPosition]=\"optionInfoPosition\" [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>Renombrar</button>\r\n            <button mat-menu-item>Copiar</button>\r\n            <button mat-menu-item id=\"delete-option\" (click)=\"deleteLesson(lesson.id)\">Eliminar</button>\r\n          </mat-menu>\r\n        </span>\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/itinerary/lesson/lesson.component.ts":
/*!******************************************************!*\
  !*** ./src/app/itinerary/lesson/lesson.component.ts ***!
  \******************************************************/
/*! exports provided: LessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonComponent", function() { return LessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _lesson_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lesson.service */ "./src/app/itinerary/lesson/lesson.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _lessonForm_lesson_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lessonForm/lesson-form.component */ "./src/app/itinerary/lesson/lessonForm/lesson-form.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../confirmAction/confirm-action.component */ "./src/app/confirmAction/confirm-action.component.ts");
/* harmony import */ var _unit_lesson_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unit-lesson.service */ "./src/app/itinerary/lesson/unit-lesson.service.ts");










var LessonComponent = /** @class */ (function () {
    function LessonComponent(loginService, lessonService, router, activatedRoute, unitService, unitLessonService, dialog) {
        this.loginService = loginService;
        this.lessonService = lessonService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.unitService = unitService;
        this.unitLessonService = unitLessonService;
        this.dialog = dialog;
        this.optionInfoPosition = 'after';
        this.confirmText = 'Se eliminará la lección permanentemente';
        this.button1 = 'Cancelar';
        this.button2 = 'Borrar';
    }
    LessonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lessons = [];
        this.lessonsResult = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.unitId = params.unitId;
        });
        this.unitService.getUnit(this.unitId).subscribe(function (data) {
            _this.unit = data;
            _this.lessons = data.lessons;
            _this.lessonsResult = _this.lessons;
        }, function (error) { console.log(error); });
    };
    LessonComponent.prototype.editLesson = function (lessonId) {
        this.router.navigate(['/units/' + this.unitId + '/lessons/' + lessonId]);
    };
    LessonComponent.prototype.searchLesson = function (value) {
        this.lessonsResult = [];
        for (var _i = 0, _a = this.lessons; _i < _a.length; _i++) {
            var result = _a[_i];
            if (result.name.toLowerCase().includes(value.toLowerCase())) {
                this.lessonsResult.push(result);
            }
        }
    };
    LessonComponent.prototype.addLesson = function () {
        var _this = this;
        this.newLesson = { name: '' };
        var dialogRef = this.dialog.open(_lessonForm_lesson_form_component__WEBPACK_IMPORTED_MODULE_6__["LessonFormComponent"], {
            data: { itinerary: this.newLesson }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.newLesson = result;
            if (typeof _this.newLesson !== 'undefined') {
                if (_this.newLesson.name !== '') {
                    _this.unitLessonService.addLesson(_this.unitId, _this.newLesson).subscribe(function (data) {
                        _this.router.navigate(['/units/' + _this.unitId + '/lessons/' + data.id]);
                    });
                }
            }
        });
    };
    LessonComponent.prototype.deleteLesson = function (lessonId) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmActionComponent"], {
            data: { confirmText: this.confirmText, button1: this.button1, button2: this.button2 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.unitLessonService.deleteLesson(_this.unitId, lessonId).subscribe(function () {
                    _this.ngOnInit();
                });
            }
        });
    };
    LessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lessons',
            template: __webpack_require__(/*! ./lesson.component.html */ "./src/app/itinerary/lesson/lesson.component.html"),
            styles: [__webpack_require__(/*! ./lesson.component.css */ "./src/app/itinerary/lesson/lesson.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _lesson_service__WEBPACK_IMPORTED_MODULE_3__["LessonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"],
            _unit_lesson_service__WEBPACK_IMPORTED_MODULE_9__["UnitLessonService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], LessonComponent);
    return LessonComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/lesson/lesson.service.ts":
/*!****************************************************!*\
  !*** ./src/app/itinerary/lesson/lesson.service.ts ***!
  \****************************************************/
/*! exports provided: LessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonService", function() { return LessonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LessonService = /** @class */ (function () {
    function LessonService(http) {
        this.http = http;
    }
    LessonService.prototype.getLessons = function () {
        return this.http.get('/api/lessons/');
    };
    LessonService.prototype.getLesson = function (id) {
        return this.http.get('/api/lessons/' + id);
    };
    LessonService.prototype.updateLesson = function (lesson) {
        var body = JSON.stringify(lesson);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put('/api/lessons/' + lesson.id, body, { headers: headers });
    };
    LessonService.prototype.removeSlide = function (itinerary, id) {
        return this.http.delete('/api/lessons/' + itinerary.id + '/slide/' + id);
    };
    LessonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LessonService);
    return LessonService;
}());



/***/ }),

/***/ "./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolsBar {\r\n  height: 6.2rem;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.admin {\r\n  background-color: #5d306a;\r\n}\r\n\r\n.student {\r\n  background-color: #30376a;\r\n}\r\n\r\n.tools {\r\n  color: white;\r\n  position: absolute;\r\n  top: 3.7rem;\r\n}\r\n\r\n.tool {\r\n  margin-left: 0.5rem;\r\n  background-color: #7d3c90;\r\n}\r\n\r\n.tool:hover {\r\n  background-color: #a769b8;\r\n}\r\n\r\n.deleteItinerary-button {\r\n  background-color: indianred;\r\n  color: white;\r\n}\r\n\r\n#editor-container {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 55%;\r\n  top: 6.5rem;\r\n  bottom: 0.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n#html-lesson-editor {\r\n  top: 4.5rem;\r\n  height: 20rem;\r\n}\r\n\r\n.slides-container {\r\n  position: absolute;\r\n  height: calc(100vh - 15rem);\r\n  background-color: #f9f2fd;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.slide-content {\r\n  margin-bottom: 1rem;\r\n  position: relative;\r\n}\r\n\r\n.text-area {\r\n  position: absolute;\r\n  resize: none;\r\n  border: none;\r\n  width: 93%;\r\n  top: 0.5rem;\r\n  bottom: 0.5rem;\r\n  padding: 0.5rem;\r\n  font-size: 15px;\r\n  outline: none;\r\n}\r\n\r\n.html-lesson-representation-editor {\r\n  position: absolute;\r\n  right: 0;\r\n  left: 45%;\r\n  top: 6.5rem;\r\n  bottom: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  margin: 0.5rem;\r\n  height: 10rem;\r\n}\r\n\r\n.html-lesson-view {\r\n  margin: 1rem;\r\n}\r\n\r\n.html-lesson-title {\r\n  text-align: center;\r\n}\r\n\r\n.slide {\r\n  margin-top: 1rem;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n.spinner {\r\n  position: absolute;\r\n  width: 10%;\r\n  margin-right: 45%;\r\n  margin-left: 45%;\r\n  margin-top: 30%;\r\n}\r\n\r\n.center {\r\n  position: absolute;\r\n  width: 10%;\r\n  margin-top: 20%;\r\n  margin-right: 45%;\r\n  margin-left: 45%;\r\n  z-index: 1000;\r\n}\r\n\r\n#prev {\r\n  color: white;\r\n  position: absolute;\r\n  background-color: #30376a;\r\n  left: -8%;\r\n  top: 42%;\r\n}\r\n\r\n#next {\r\n  color: white;\r\n  position: absolute;\r\n  background-color: #30376a;\r\n  right: -8%;\r\n  top: 42%;\r\n}\r\n\r\n.progress {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L2xlc3Nvbi9sZXNzb25FZGl0b3IvbGVzc29uLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9sZXNzb24vbGVzc29uRWRpdG9yL2xlc3Nvbi1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sc0JhciB7XHJcbiAgaGVpZ2h0OiA2LjJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5hZG1pbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzA2YTtcclxufVxyXG5cclxuLnN0dWRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM3NmE7XHJcbn1cclxuXHJcbi50b29scyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMuN3JlbTtcclxufVxyXG5cclxuLnRvb2wge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkM2M5MDtcclxufVxyXG5cclxuLnRvb2w6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzY5Yjg7XHJcbn1cclxuXHJcbi5kZWxldGVJdGluZXJhcnktYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDU1JTtcclxuICB0b3A6IDYuNXJlbTtcclxuICBib3R0b206IDAuNXJlbTtcclxuICBtYXJnaW46IDAuNXJlbTtcclxufVxyXG5cclxuI2h0bWwtbGVzc29uLWVkaXRvciB7XHJcbiAgdG9wOiA0LjVyZW07XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxufVxyXG5cclxuLnNsaWRlcy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXJlbSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjJmZDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLnNsaWRlLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGV4dC1hcmVhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogOTMlO1xyXG4gIHRvcDogMC41cmVtO1xyXG4gIGJvdHRvbTogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmh0bWwtbGVzc29uLXJlcHJlc2VudGF0aW9uLWVkaXRvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB0b3A6IDYuNXJlbTtcclxuICBib3R0b206IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxufVxyXG5cclxuLmh0bWwtbGVzc29uLXZpZXcge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLmh0bWwtbGVzc29uLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxuICBtYXJnaW4tdG9wOiAzMCU7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDQ1JTtcclxuICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbiNwcmV2IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM3NmE7XHJcbiAgbGVmdDogLTglO1xyXG4gIHRvcDogNDIlO1xyXG59XHJcblxyXG4jbmV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNzZhO1xyXG4gIHJpZ2h0OiAtOCU7XHJcbiAgdG9wOiA0MiU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <!-- TOOLS BAR UNIT -->\r\n    <div [ngClass]=\"loginService.isAdmin ? 'toolsBar admin' : 'toolsBar student'\">\r\n      <mat-chip-list *ngIf=\"loginService.isAdmin\" class=\"tools\">\r\n        <button mat-button class=\"tool\">\r\n          <mat-icon>add_photo_alternate</mat-icon>Añadir imagen\r\n        </button>\r\n        <button mat-button class=\"tool\" (click)=\"openBottomSheet()\">\r\n          <mat-icon>assignment</mat-icon>Buscar fichas\r\n        </button>\r\n        <button mat-button class=\"tool\">\r\n          <mat-icon>book</mat-icon>Buscar slides\r\n        </button>\r\n        <button mat-button class=\"tool\">\r\n          <mat-icon>description</mat-icon>Buscar ejercicios\r\n        </button>\r\n      </mat-chip-list>\r\n    </div>\r\n\r\n    <!-- TOOLS BAR COURSE-->\r\n\r\n    <!-- EDITOR -->\r\n    <div *ngIf=\"loginService.isAdmin\">\r\n      <mat-card id=\"editor-container\">\r\n        <textarea id=\"text-area-editor\" class=\"text-area\" [(ngModel)]=\"lessonContent\" (change)=\"updateHTMLView()\" (scroll)=\"scrollText()\"></textarea>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <!-- HTML REPRESENTATION -->\r\n    <div [ngClass]=\"loginService.isAdmin ? 'html-lesson-representation-editor' : 'html-lesson-view'\">\r\n      <img [ngClass]=\"loginService.isAdmin ? 'spinner' : 'center'\" src=\"../../../../assets/img/spinner.gif\" *ngIf=\"showSpinner\">\r\n      <h1 [ngClass]=\"!loginService.isAdmin ? 'html-lesson-title' : ''\">{{lesson?.name}}</h1>\r\n      <mat-card *ngIf=\"(loginService.isAdmin && !showSpinner)\" id=\"slide-area-editor\" class=\"slides-container\">\r\n        <div *ngIf=\"loginService.isAdmin\">\r\n          <div *ngFor=\"let slide of contentHTML\">\r\n            <mat-card class=\"slide-content\">\r\n              <div [innerHTML]=\"slide\"></div>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <div *ngIf=\"(!loginService.isAdmin &&  !showSpinner)\">\r\n        <mat-progress-bar class=\"progress\" mode=\"determinate\" value=\"{{progress}}\"></mat-progress-bar>\r\n        <mat-card class=\"slide slide-content\">\r\n          <button *ngIf=\"(contentSlide !== 0)\" mat-icon-button id=\"prev\" (click)=\"prevSlide()\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n          <div [innerHTML]=\"contentHTML[contentSlide]\"></div>\r\n          <button *ngIf=\"(contentSlide !== contentHTML.length-1)\" mat-icon-button id=\"next\" (click)=\"nextSlide()\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n        </mat-card>\r\n        <mat-progress-bar class=\"progress\" mode=\"determinate\" value=\"{{progress}}\"></mat-progress-bar>\r\n      </div>\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.ts ***!
  \**************************************************************************/
/*! exports provided: LessonEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonEditorComponent", function() { return LessonEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _slide_slide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../slide/slide.service */ "./src/app/slide/slide.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _lesson_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lesson.service */ "./src/app/itinerary/lesson/lesson.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var asciidoctor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! asciidoctor */ "./node_modules/asciidoctor/index.js");
/* harmony import */ var asciidoctor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(asciidoctor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _question_definitionQuestion_definitionQuestion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../question/definitionQuestion/definitionQuestion.service */ "./src/app/question/definitionQuestion/definitionQuestion.service.ts");
/* harmony import */ var _lessonTools_units_cards_tool_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lessonTools/units-cards-tool.component */ "./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.ts");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../tab/tab.service */ "./src/app/tab/tab.service.ts");
/* harmony import */ var _unit_lesson_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../unit-lesson.service */ "./src/app/itinerary/lesson/unit-lesson.service.ts");
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../course/course.service */ "./src/app/course/course.service.ts");
/* harmony import */ var _module_module_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../module/module.service */ "./src/app/itinerary/module/module.service.ts");
















function convertToHTML(text) {
    var asciidoctor = asciidoctor__WEBPACK_IMPORTED_MODULE_9___default()();
    var html = asciidoctor.convert(text);
    return (html);
}
var LessonEditorComponent = /** @class */ (function () {
    function LessonEditorComponent(slideService, router, activatedRoute, dialogService, loginService, lessonService, definitionQuestionService, unitService, courseService, moduleService, bottomSheet, unitLessonService, tabService) {
        this.slideService = slideService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.loginService = loginService;
        this.lessonService = lessonService;
        this.definitionQuestionService = definitionQuestionService;
        this.unitService = unitService;
        this.courseService = courseService;
        this.moduleService = moduleService;
        this.bottomSheet = bottomSheet;
        this.unitLessonService = unitLessonService;
        this.tabService = tabService;
        this.showSpinner = false;
        this.showSpinner = true;
    }
    LessonEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentSlide = 0;
        this.activatedRoute.params.subscribe(function (params) {
            _this.unitId = params.unitId;
            _this.lessonId = params.lessonId;
            _this.lessonService.getLesson(_this.lessonId).subscribe(function (lesson) {
                if (_this.loginService.isAdmin) {
                    _this.moduleId = params.moduleId;
                    _this.unitService.getUnit(_this.unitId).subscribe(function (unit) {
                        if (typeof _this.moduleId === 'undefined') {
                            _this.tabService.setLesson(unit.name, _this.unitId, lesson.name);
                        }
                        else {
                            _this.moduleService.getModule(_this.moduleId).subscribe(function (module) {
                                _this.tabService.setLessonInModule(unit.name, _this.unitId, module.name, module.id, lesson.name);
                            });
                        }
                    });
                }
                else {
                    _this.moduleId = params.moduleId;
                    _this.moduleService.getModule(_this.moduleId).subscribe(function (module) {
                        _this.courseService.getCourse(_this.unitId).subscribe(function (course) {
                            _this.tabService.setLessonInModule(course.name, course.id, module.name, module.id, lesson.name);
                        });
                    });
                }
                _this.loadItinerary();
            });
        });
    };
    LessonEditorComponent.prototype.loadItinerary = function () {
        var _this = this;
        this.lessonService.getLesson(this.lessonId).subscribe(function (data) {
            _this.lesson = {
                id: data.id,
                name: data.name,
                slides: data.slides
            };
            _this.lessonContent = '== ' + _this.lesson.name + '\n';
            _this.lessonContentExtended = '';
            _this.slidesToContent(_this.lesson.slides);
            _this.extendContent(_this.lessonContent);
        });
    };
    LessonEditorComponent.prototype.viewHTMLVersion = function () {
        var _this = this;
        this.contentHTML = [];
        this.slidesContentExtended = this.lessonContentExtended.split('===');
        if (!this.loginService.isAdmin) {
            this.index = '=== Índice\n\n';
            this.lesson.slides.forEach(function (slide) {
                _this.index = _this.index + '. ' + slide.name + '\n';
            });
            this.contentHTML.push(convertToHTML(this.index));
        }
        var counter = 0;
        this.slidesContentExtended.forEach(function (slide) {
            if (counter !== 0) {
                _this.contentHTML.push(convertToHTML('=== ' + slide + '\n'));
            }
            counter = counter + 1;
        });
    };
    LessonEditorComponent.prototype.slidesToContent = function (slides) {
        var _this = this;
        if (slides.length === 0) {
            this.showSpinner = false;
        }
        else {
            slides.forEach(function (slide) {
                _this.lessonContent = _this.lessonContent + slide.content + '// ' + slide.id + '\n\n';
            });
        }
    };
    LessonEditorComponent.prototype.getEmbebedContent = function (contentId, contentId2, unitId, content, contentCounter, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var contentEmbebed, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type === 'card')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.unitService.getCard(contentId, unitId).toPromise()];
                    case 1:
                        contentEmbebed = _a.sent();
                        this.extractedData.splice(contentCounter, 1, contentEmbebed.content);
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(type === 'slide')) return [3 /*break*/, 4];
                        this.subSlide = true;
                        return [4 /*yield*/, this.unitLessonService.getSlideFormLesson(contentId, contentId2, unitId).toPromise()];
                    case 3:
                        contentEmbebed = _a.sent();
                        this.extractedData.splice(contentCounter, 1, contentEmbebed.content.split('=== ')[1]);
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(type === 'question')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.definitionQuestionService.getDefinitionQuestion(contentId).toPromise()];
                    case 5:
                        contentEmbebed = _a.sent();
                        url = 'http://localhost:4200/#/units/' + unitId + '/itineraries/11/definitionQuestion/' + contentId;
                        this.extractedData.splice(contentCounter, 1, contentEmbebed.questionText + '\n\n- ' + url + '[Resolver^]');
                        _a.label = 6;
                    case 6:
                        this.addExtractedData(content);
                        return [2 /*return*/];
                }
            });
        });
    };
    LessonEditorComponent.prototype.contentCounterFunction = function (content) {
        var _this = this;
        this.contentCount = 0;
        var lines;
        lines = content.split('\n');
        lines.forEach(function (line) {
            var words;
            words = line.split('.');
            if (words[0] === 'assert') {
                _this.contentCount = _this.contentCount + 1;
            }
        });
    };
    LessonEditorComponent.prototype.extendContent = function (content) {
        var _this = this;
        this.subSlide = false;
        this.contentCounterFunction(content);
        this.extractedData = [];
        for (var i = 0; i < this.contentCount; i++) {
            this.extractedData.push('');
        }
        this.position = [];
        var counter = 0;
        var contentCounter = 0;
        var lines;
        lines = content.split('\n');
        lines.forEach(function (line) {
            var words;
            words = line.split('.');
            if (words[0] === 'assert') {
                var parameters = void 0;
                parameters = words[1].split('/');
                if (parameters[0] === 'card') {
                    _this.position.push(counter);
                    _this.getEmbebedContent(Number(parameters[1]), null, Number(parameters[2]), content, contentCounter, 'card');
                    contentCounter = contentCounter + 1;
                }
                else if (parameters[0] === 'slide') {
                    _this.position.push(counter);
                    _this.getEmbebedContent(Number(parameters[1]), Number(parameters[2]), Number(parameters[3]), content, contentCounter, 'slide');
                    contentCounter = contentCounter + 1;
                }
                else if (parameters[0] === 'question') {
                    _this.position.push(counter);
                    _this.getEmbebedContent(Number(parameters[1]), null, Number(parameters[2]), content, contentCounter, 'question');
                    contentCounter = contentCounter + 1;
                }
            }
            _this.addExtractedData(content);
            counter = counter + 1;
        });
    };
    LessonEditorComponent.prototype.addExtractedData = function (content) {
        var _this = this;
        this.componentsChecker = 0;
        this.lessonContentExtended = '';
        var lines;
        lines = content.split('\n');
        for (var i = 0; i < this.position.length; i++) {
            lines[this.position[i]] = this.extractedData[i];
        }
        lines.forEach(function (line) {
            _this.lessonContentExtended = _this.lessonContentExtended + line + '\n';
        });
        this.extractedData.forEach(function (component) {
            if (component !== '') {
                _this.componentsChecker = _this.componentsChecker + 1;
            }
        });
        if (this.componentsChecker === this.contentCount) {
            if (this.subSlide) {
                this.extendContent(this.lessonContentExtended);
            }
            else {
                this.showSpinner = false;
                this.viewHTMLVersion();
                this.progress = (1 / (this.contentHTML.length)) * 100;
            }
        }
    };
    LessonEditorComponent.prototype.contentToItinerary = function (content) {
        var slidesContent;
        slidesContent = content.split('=== ');
        if (slidesContent[0].split(' ')[0] === '==') {
            this.lesson.name = '';
            for (var i = 1; i < slidesContent[0].split(' ').length; i++) {
                this.lesson.name = this.lesson.name + slidesContent[0].split(' ')[i].split('\n')[0] + ' ';
            }
        }
        this.contentToSlides(slidesContent);
    };
    LessonEditorComponent.prototype.contentToSlides = function (content) {
        this.lesson.slides = [];
        var slide;
        for (var i = 1; i < content.length; i++) {
            slide = { name: '', content: '' };
            var lines = void 0;
            lines = content[i].split('\n');
            slide.name = lines[0];
            slide.content = '=== ' + slide.name + '\n';
            for (var j = 1; j < lines.length; j++) {
                if (j < lines.length - 2) {
                    if (!(lines[j].split(' ')[0] === '//')) {
                        slide.content = slide.content + lines[j] + '\n';
                    }
                }
                else {
                    if ((lines.length > 2) && (j >= 2)) {
                        if (lines[j - 2].split(' ')[0] === '//') {
                            slide.id = Number(lines[j - 2].split(' ')[1]);
                        }
                    }
                }
            }
            this.lesson.slides.push(slide);
        }
    };
    LessonEditorComponent.prototype.updateHTMLView = function () {
        var _this = this;
        this.contentToItinerary(this.lessonContent);
        this.showSpinner = true;
        this.lessonService.updateLesson(this.lesson).subscribe(function (_) {
            _this.loadItinerary();
        }, function (error) {
            console.error(error);
        });
    };
    LessonEditorComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(_lessonTools_units_cards_tool_component__WEBPACK_IMPORTED_MODULE_11__["UnitsCardsToolComponent"]);
    };
    LessonEditorComponent.prototype.nextSlide = function () {
        this.contentSlide++;
        this.progress = this.progress + ((1 / (this.contentHTML.length)) * 100);
    };
    LessonEditorComponent.prototype.prevSlide = function () {
        this.contentSlide--;
        this.progress = this.progress - ((1 / (this.contentHTML.length)) * 100);
    };
    LessonEditorComponent.prototype.scrollSlides = function () {
        var div = document.getElementById('slide-area-editor');
        var div2 = document.getElementById('text-area-editor');
        div2.scrollTop = div.scrollTop;
    };
    LessonEditorComponent.prototype.scrollText = function () {
        var div = document.getElementById('slide-area-editor');
        var div2 = document.getElementById('text-area-editor');
        div.scrollTop = div2.scrollTop;
    };
    LessonEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-lesson-editor',
            template: __webpack_require__(/*! ./lesson-editor.component.html */ "./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.html"),
            styles: [__webpack_require__(/*! ./lesson-editor.component.css */ "./src/app/itinerary/lesson/lessonEditor/lesson-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_slide_slide_service__WEBPACK_IMPORTED_MODULE_1__["SlideService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_3__["TdDialogService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _lesson_service__WEBPACK_IMPORTED_MODULE_6__["LessonService"],
            _question_definitionQuestion_definitionQuestion_service__WEBPACK_IMPORTED_MODULE_10__["DefinitionQuestionService"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_8__["UnitService"],
            _course_course_service__WEBPACK_IMPORTED_MODULE_14__["CourseService"],
            _module_module_service__WEBPACK_IMPORTED_MODULE_15__["ModuleService"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"],
            _unit_lesson_service__WEBPACK_IMPORTED_MODULE_13__["UnitLessonService"],
            _tab_tab_service__WEBPACK_IMPORTED_MODULE_12__["TabService"]])
    ], LessonEditorComponent);
    return LessonEditorComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/lesson/lessonForm/lesson-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonForm/lesson-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addItinerary-button {\r\n  background-color: #7d3c90;\r\n  color: white;\r\n}\r\n\r\n.itinerary-form {\r\n  text-align: center;\r\n}\r\n\r\n.itinerary-form-buttons {\r\n  margin-left: 5.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L2xlc3Nvbi9sZXNzb25Gb3JtL2xlc3Nvbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L2xlc3Nvbi9sZXNzb25Gb3JtL2xlc3Nvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkSXRpbmVyYXJ5LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkM2M5MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pdGluZXJhcnktZm9ybSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRpbmVyYXJ5LWZvcm0tYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/itinerary/lesson/lessonForm/lesson-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonForm/lesson-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n\r\n  <div class=\"itinerary-form\">\r\n    <h1 mat-dialog-title>NUEVA LECCIÓN</h1>\r\n    <div mat-dialog-content>\r\n      <mat-form-field>\r\n        <mat-label>Nombre del la lección</mat-label>\r\n        <input matInput [(ngModel)]=\"data.itinerary.name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions class=\"itinerary-form-buttons\">\r\n      <button mat-button (click)=\"onNoClick()\">Cancelar</button>\r\n      <button mat-button class=\"addItinerary-button\" [mat-dialog-close]=\"data.itinerary\" cdkFocusInitial>Añadir</button>\r\n    </div>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/itinerary/lesson/lessonForm/lesson-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonForm/lesson-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: LessonFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonFormComponent", function() { return LessonFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var LessonFormComponent = /** @class */ (function () {
    function LessonFormComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LessonFormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LessonFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./lesson-form.component.html */ "./src/app/itinerary/lesson/lessonForm/lesson-form.component.html"),
            styles: [__webpack_require__(/*! ./lesson-form.component.css */ "./src/app/itinerary/lesson/lessonForm/lesson-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], LessonFormComponent);
    return LessonFormComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#unitSearcher {\r\n  margin-left: 30%;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L2xlc3Nvbi9sZXNzb25Ub29scy91bml0cy1jYXJkcy10b29sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L2xlc3Nvbi9sZXNzb25Ub29scy91bml0cy1jYXJkcy10b29sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdW5pdFNlYXJjaGVyIHtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <mat-form-field id=\"unitSearcher\">\r\n      <input matInput (keyup)=\"applyFilterUnits($event.target.value)\" placeholder=\"Nombre de la unidad\">\r\n    </mat-form-field>\r\n\r\n    <mat-accordion *ngFor = \"let unit of this.unitsResult\">\r\n      <mat-expansion-panel class=\"card\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            {{unit.name}}\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div *ngFor = \"let card of unit.cards\">\r\n          {{card.name}}\r\n          <mat-card>\r\n            assert.card/{{card.id}}/{{unit.id}}\r\n            <button id=\"copyButton\" mat-icon-button matTooltip=\"Copiar\" [matTooltipPosition]=\"copyInfoPosition\" (click)=\"openLink($event, 'assert.card/' + card.id + '/' + unit.id)\">\r\n              <mat-icon>file_copy</mat-icon>\r\n            </button>\r\n          </mat-card>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.ts ***!
  \****************************************************************************/
/*! exports provided: UnitsCardsToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsCardsToolComponent", function() { return UnitsCardsToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");






var UnitsCardsToolComponent = /** @class */ (function () {
    function UnitsCardsToolComponent(router, activatedRoute, unitService, bottomSheetRef, clipboardService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.unitService = unitService;
        this.bottomSheetRef = bottomSheetRef;
        this.clipboardService = clipboardService;
        this.copyInfoPosition = 'after';
    }
    UnitsCardsToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unitService.getUnits().subscribe(function (data) {
            _this.units = [];
            _this.unitsResult = [];
            data.forEach(function (unit) {
                _this.units.push({
                    id: unit.id,
                    name: unit.name,
                    cards: unit.cards,
                    lessons: unit.lessons
                });
                _this.unitsResult = _this.units;
            });
        });
    };
    UnitsCardsToolComponent.prototype.applyFilterUnits = function (value) {
        this.unitsResult = [];
        for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
            var result = _a[_i];
            if (result.name.toLowerCase().includes(value.toLowerCase())) {
                this.unitsResult.push(result);
            }
        }
    };
    UnitsCardsToolComponent.prototype.openLink = function (event, text) {
        this.clipboardService.copyFromContent(text);
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    UnitsCardsToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./units-cards-tool.component.html */ "./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.html"),
            styles: [__webpack_require__(/*! ./units-cards-tool.component.css */ "./src/app/itinerary/lesson/lessonTools/units-cards-tool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetRef"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"]])
    ], UnitsCardsToolComponent);
    return UnitsCardsToolComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/lesson/unit-lesson.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/itinerary/lesson/unit-lesson.service.ts ***!
  \*********************************************************/
/*! exports provided: UnitLessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitLessonService", function() { return UnitLessonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UnitLessonService = /** @class */ (function () {
    function UnitLessonService(http) {
        this.http = http;
        this.baseUrl = '/api/units/';
    }
    UnitLessonService.prototype.getSlideFormLesson = function (slideId, lessonId, unitId) {
        return this.http.get(this.baseUrl + unitId + '/lessons/' + lessonId + '/slides/' + slideId);
    };
    UnitLessonService.prototype.addLesson = function (unitId, lesson) {
        var body = JSON.stringify(lesson);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.baseUrl + unitId + '/lessons', body, { headers: headers });
    };
    UnitLessonService.prototype.deleteLesson = function (unitId, lessonId) {
        return this.http.delete(this.baseUrl + unitId + '/lessons/' + lessonId);
    };
    UnitLessonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UnitLessonService);
    return UnitLessonService;
}());



/***/ }),

/***/ "./src/app/itinerary/module/module.component.css":
/*!*******************************************************!*\
  !*** ./src/app/itinerary/module/module.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#module-search {\r\n  position: absolute;\r\n  top: 4rem;\r\n  width: 37%;\r\n  left: 32%;\r\n}\r\n\r\n#search {\r\n  width: 100%;\r\n}\r\n\r\n.new-module-button {\r\n  position: fixed;\r\n  color: white;\r\n  background-color: #7d3c90;\r\n  top: 3.45rem;\r\n  z-index: 501;\r\n  right: 1rem;\r\n}\r\n\r\n.tool:hover {\r\n  background-color: #a769b8;\r\n}\r\n\r\n.modules-list {\r\n  position: absolute;\r\n  top: 10rem;\r\n  width: 50%;\r\n  left: 25%;\r\n}\r\n\r\n.module-button {\r\n  margin-top: 0.5rem;\r\n  width: 85%;\r\n  padding: 1rem 0 1rem 2rem;\r\n  text-align: left;\r\n}\r\n\r\n.admin-module-button {\r\n  background-color: #f9f2fd;\r\n}\r\n\r\n.user-module-button {\r\n  background-color: #eaeefd;\r\n}\r\n\r\n#options-module-button {\r\n  height: 4.2rem;\r\n  background-color: #f9f2fd;\r\n  margin-left: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#delete-option {\r\n  color: indianred;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-invalid .mat-input-element, .mat-warn .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-label {\r\n  color: rgba(0,0,0,.6)!important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L21vZHVsZS9tb2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9tb2R1bGUvbW9kdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbW9kdWxlLXNlYXJjaCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNHJlbTtcclxuICB3aWR0aDogMzclO1xyXG4gIGxlZnQ6IDMyJTtcclxufVxyXG5cclxuI3NlYXJjaCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXctbW9kdWxlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QzYzkwO1xyXG4gIHRvcDogMy40NXJlbTtcclxuICB6LWluZGV4OiA1MDE7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi50b29sOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc2OWI4O1xyXG59XHJcblxyXG4ubW9kdWxlcy1saXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHJlbTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLm1vZHVsZS1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICB3aWR0aDogODUlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDJyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmFkbWluLW1vZHVsZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWYyZmQ7XHJcbn1cclxuXHJcbi51c2VyLW1vZHVsZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVlZmQ7XHJcbn1cclxuXHJcbiNvcHRpb25zLW1vZHVsZS1idXR0b24ge1xyXG4gIGhlaWdodDogNC4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWYyZmQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNkZWxldGUtb3B0aW9uIHtcclxuICBjb2xvcjogaW5kaWFucmVkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuICBjb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LCAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNikhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/itinerary/module/module.component.html":
/*!********************************************************!*\
  !*** ./src/app/itinerary/module/module.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n\r\n<button mat-button *ngIf=\"this.loginService.isAdmin\" class=\"tool new-module-button\" (click)=\"addModule()\">\r\n  <mat-icon>add</mat-icon>\r\n  Nuevo Módulo\r\n</button>\r\n\r\n<div id=\"module-search\">\r\n  <mat-form-field appearance=\"outline\" id=\"search\">\r\n    <mat-label>Buscar módulo</mat-label>\r\n    <input id=\"search-input\" matInput (keyup)=\"searchModule($event.target.value)\"/>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div class=\"modules-list center-align\">\r\n        <span *ngFor=\"let module of modulesResult\">\r\n          <button mat-button [ngClass]=\"loginService.isAdmin ? 'module-button admin-module-button' : 'module-button user-module-button'\" (click)=\"editModule(module.id)\">\r\n            {{module.name}}\r\n          </button>\r\n          <button id=\"options-module-button\" mat-button matTooltip=\"Opciones\" [matTooltipPosition]=\"optionInfoPosition\" [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"renameModule(module)\">Renombrar</button>\r\n            <button mat-menu-item>Copiar</button>\r\n            <button mat-menu-item id=\"delete-option\" (click)=\"deleteModule(module.id)\">Eliminar</button>\r\n          </mat-menu>\r\n        </span>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/itinerary/module/module.component.ts":
/*!******************************************************!*\
  !*** ./src/app/itinerary/module/module.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../confirmAction/confirm-action.component */ "./src/app/confirmAction/confirm-action.component.ts");
/* harmony import */ var _unit_module_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unit-module.service */ "./src/app/itinerary/module/unit-module.service.ts");
/* harmony import */ var _moduleForm_module_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moduleForm/module-form.component */ "./src/app/itinerary/module/moduleForm/module-form.component.ts");
/* harmony import */ var _moduleRename_module_rename_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moduleRename/module-rename.component */ "./src/app/itinerary/module/moduleRename/module-rename.component.ts");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module.service */ "./src/app/itinerary/module/module.service.ts");











var ModuleComponent = /** @class */ (function () {
    function ModuleComponent(loginService, router, activatedRoute, unitService, moduleService, unitModuleService, dialog) {
        this.loginService = loginService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.unitService = unitService;
        this.moduleService = moduleService;
        this.unitModuleService = unitModuleService;
        this.dialog = dialog;
        this.optionInfoPosition = 'after';
        this.confirmText = 'Se eliminará el modulo permanentemente';
        this.button1 = 'Cancelar';
        this.button2 = 'Borrar';
    }
    ModuleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modules = [];
        this.modulesResult = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.unitId = params.unitId;
        });
        this.unitService.getUnit(this.unitId).subscribe(function (data) {
            _this.unit = data;
            _this.modules = data.modules;
            _this.modulesResult = _this.modules;
        }, function (error) { console.log(error); });
    };
    ModuleComponent.prototype.editModule = function (moduleId) {
        this.router.navigate(['/units/' + this.unitId + '/modules/' + moduleId]);
    };
    ModuleComponent.prototype.searchModule = function (value) {
        this.modulesResult = [];
        for (var _i = 0, _a = this.modules; _i < _a.length; _i++) {
            var result = _a[_i];
            if (result.name.toLowerCase().includes(value.toLowerCase())) {
                this.modulesResult.push(result);
            }
        }
    };
    ModuleComponent.prototype.addModule = function () {
        var _this = this;
        this.newModule = { name: '' };
        var dialogRef = this.dialog.open(_moduleForm_module_form_component__WEBPACK_IMPORTED_MODULE_8__["ModuleFormComponent"], {
            data: { itinerary: this.newModule }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.newModule = result;
            if (typeof _this.newModule !== 'undefined') {
                if (_this.newModule.name !== '') {
                    _this.unitModuleService.addModule(_this.unitId, _this.newModule).subscribe(function (data) {
                        _this.router.navigate(['/units/' + _this.unitId + '/modules/' + data.id]);
                    });
                }
            }
        });
    };
    ModuleComponent.prototype.deleteModule = function (moduleId) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmActionComponent"], {
            data: { confirmText: this.confirmText, button1: this.button1, button2: this.button2 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.unitModuleService.deleteModule(_this.unitId, moduleId).subscribe(function () {
                    _this.ngOnInit();
                });
            }
        });
    };
    ModuleComponent.prototype.renameModule = function (module) {
        var _this = this;
        var dialogRef = this.dialog.open(_moduleRename_module_rename_component__WEBPACK_IMPORTED_MODULE_9__["ModuleRenameComponent"], {
            data: { name: module.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result !== 'undefined') {
                if ((result !== '') && (result !== module.name)) {
                    module.name = result;
                    _this.moduleService.updateModule(module).subscribe(function () {
                    });
                }
            }
        });
    };
    ModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modules',
            template: __webpack_require__(/*! ./module.component.html */ "./src/app/itinerary/module/module.component.html"),
            styles: [__webpack_require__(/*! ./module.component.css */ "./src/app/itinerary/module/module.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"],
            _module_service__WEBPACK_IMPORTED_MODULE_10__["ModuleService"],
            _unit_module_service__WEBPACK_IMPORTED_MODULE_7__["UnitModuleService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ModuleComponent);
    return ModuleComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/module/module.service.ts":
/*!****************************************************!*\
  !*** ./src/app/itinerary/module/module.service.ts ***!
  \****************************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ModuleService = /** @class */ (function () {
    function ModuleService(http) {
        this.http = http;
    }
    ModuleService.prototype.getModules = function () {
        return this.http.get('/api/modules/');
    };
    ModuleService.prototype.getModule = function (id) {
        return this.http.get('/api/modules/' + id);
    };
    ModuleService.prototype.updateModule = function (module) {
        var body = JSON.stringify(module);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put('/api/modules/' + module.id, body, { headers: headers });
    };
    ModuleService.prototype.addBlock = function (moduleId, block) {
        var body = JSON.stringify(block);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/modules/' + moduleId, body, { headers: headers });
    };
    ModuleService.prototype.deleteBlock = function (moduleId, blockId) {
        return this.http.delete('/api/modules/' + moduleId + '/blocks/' + blockId);
    };
    ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ModuleService);
    return ModuleService;
}());



/***/ }),

/***/ "./src/app/itinerary/module/moduleEditor/module-editor.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleEditor/module-editor.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolsBar {\r\n  height: 6.2rem;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n.admin {\r\n  background-color: #5d306a;\r\n}\r\n\r\n.student {\r\n  background-color: #30376a;\r\n}\r\n\r\n.example-tree-invisible {\r\n  display: none;\r\n}\r\n\r\n.example-tree ul,\r\n.example-tree li {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.tab {\r\n  background-color: #7d3c90;\r\n  color: #ffffff;\r\n  padding: 0.3rem 0 0.3rem 3.5rem;\r\n  position: relative;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  margin-bottom: 0.5rem;\r\n  text-align: left;\r\n  height: 3rem;\r\n}\r\n\r\n.tab:hover {\r\n  background-color: #a769b8;\r\n}\r\n\r\n.activeTab {\r\n  background-color: #a769b8;\r\n}\r\n\r\n.tab-text {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.tab-icon {\r\n  position: absolute;\r\n  left: 1.37rem;\r\n  margin-top: 0.4rem;\r\n}\r\n\r\n.tab-icon-without-menu {\r\n  position: absolute;\r\n  left: 1.37rem;\r\n  top: 0.78rem;\r\n}\r\n\r\n#module-content {\r\n  margin-top: 2rem;\r\n  position: absolute;\r\n  right: 0;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.with-menu {\r\n  width: calc(100% - 21.5rem);\r\n}\r\n\r\n.without-menu {\r\n  width: calc(100% - 6.2rem);\r\n}\r\n\r\n#lateral-panel {\r\n  position: fixed;\r\n  top: 3rem;\r\n  bottom: 0;\r\n  background-color: #30376a;\r\n  padding: 1rem;\r\n}\r\n\r\n#hide-menu-button {\r\n  z-index: 501;\r\n  top: 3rem;\r\n  position: fixed;\r\n  color: #ffffff;\r\n  padding: 0.8rem;\r\n  border-bottom-right-radius: 1rem;\r\n  border-top-right-radius: 1rem;\r\n  background-image: linear-gradient(to right, #30376a 0%, #202047 100%);\r\n  cursor: pointer;\r\n}\r\n\r\n.show-hide-menu-button {\r\n  left: calc(21rem);\r\n}\r\n\r\n.hidden-hide-menu-button {\r\n  left: calc(5.2rem);\r\n}\r\n\r\n.left-zero {\r\n  width: 20rem;\r\n}\r\n\r\n.hidden-menu {\r\n  width: 4.2rem;\r\n}\r\n\r\n#top-panel {\r\n  position: fixed;\r\n  top: 3rem;\r\n  right: 0;\r\n  height: 2.5rem;\r\n  z-index: 500;\r\n  background-color: #5d306a;\r\n  text-align: right;\r\n  padding: 0.3rem 0 0.3rem 0;\r\n}\r\n\r\n.menu-margin{\r\n  margin-left:2rem\r\n}\r\n\r\n.index-tree{\r\n  background: none;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 0px;  /* Remove scrollbar space */\r\n  background: transparent;  /* Optional: just make scrollbar invisible */\r\n}\r\n\r\n.white-text{\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.white-text:hover{\r\n  font-weight: bold;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n.lesson-button {\r\n  margin: 0.5rem;\r\n}\r\n\r\n.lesson-view-button {\r\n  margin-left: 2rem;\r\n  top: 0.75rem;\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-block-button {\r\n  background-color: #5d306a;\r\n  color: white;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.delete-block-button {\r\n  background-color: indianred;\r\n  color: white;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.lesson {\r\n  margin-left: 3rem;\r\n}\r\n\r\n.title {\r\n  top: -0.3rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L21vZHVsZS9tb2R1bGVFZGl0b3IvbW9kdWxlLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IscUVBQXFFO0VBQ3JFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixjQUFjO0VBQ2QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVSxHQUFHLDJCQUEyQjtFQUN4Qyx1QkFBdUIsR0FBRyw0Q0FBNEM7QUFDeEU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2l0aW5lcmFyeS9tb2R1bGUvbW9kdWxlRWRpdG9yL21vZHVsZS1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sc0JhciB7XHJcbiAgaGVpZ2h0OiA2LjJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5hZG1pbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzA2YTtcclxufVxyXG5cclxuLnN0dWRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM3NmE7XHJcbn1cclxuXHJcbi5leGFtcGxlLXRyZWUtaW52aXNpYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS10cmVlIHVsLFxyXG4uZXhhbXBsZS10cmVlIGxpIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4udGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QzYzkwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwIDAuM3JlbSAzLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBoZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi50YWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzY5Yjg7XHJcbn1cclxuXHJcbi5hY3RpdmVUYWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzY5Yjg7XHJcbn1cclxuXHJcbi50YWItdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnRhYi1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMS4zN3JlbTtcclxuICBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbn1cclxuXHJcbi50YWItaWNvbi13aXRob3V0LW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxLjM3cmVtO1xyXG4gIHRvcDogMC43OHJlbTtcclxufVxyXG5cclxuI21vZHVsZS1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLndpdGgtbWVudSB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIxLjVyZW0pO1xyXG59XHJcblxyXG4ud2l0aG91dC1tZW51IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNi4ycmVtKTtcclxufVxyXG5cclxuI2xhdGVyYWwtcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDNyZW07XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM3NmE7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuI2hpZGUtbWVudS1idXR0b24ge1xyXG4gIHotaW5kZXg6IDUwMTtcclxuICB0b3A6IDNyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDAuOHJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMDM3NmEgMCUsICMyMDIwNDcgMTAwJSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2hvdy1oaWRlLW1lbnUtYnV0dG9uIHtcclxuICBsZWZ0OiBjYWxjKDIxcmVtKTtcclxufVxyXG5cclxuLmhpZGRlbi1oaWRlLW1lbnUtYnV0dG9uIHtcclxuICBsZWZ0OiBjYWxjKDUuMnJlbSk7XHJcbn1cclxuXHJcbi5sZWZ0LXplcm8ge1xyXG4gIHdpZHRoOiAyMHJlbTtcclxufVxyXG5cclxuLmhpZGRlbi1tZW51IHtcclxuICB3aWR0aDogNC4ycmVtO1xyXG59XHJcblxyXG4jdG9wLXBhbmVsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzcmVtO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHotaW5kZXg6IDUwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzMDZhO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwIDAuM3JlbSAwO1xyXG59XHJcblxyXG4ubWVudS1tYXJnaW57XHJcbiAgbWFyZ2luLWxlZnQ6MnJlbVxyXG59XHJcblxyXG4uaW5kZXgtdHJlZXtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwcHg7ICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cclxufVxyXG5cclxuLndoaXRlLXRleHR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndoaXRlLXRleHQ6aG92ZXJ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5sZXNzb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDAuNXJlbTtcclxufVxyXG5cclxuLmxlc3Nvbi12aWV3LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgdG9wOiAwLjc1cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtYmxvY2stYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzMDZhO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmRlbGV0ZS1ibG9jay1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5sZXNzb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRvcDogLTAuM3JlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/itinerary/module/moduleEditor/module-editor.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleEditor/module-editor.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <!-- TOOLS BAR -->\r\n    <div *ngIf=\"loginService.isLogged\" [ngClass]=\"loginService.isAdmin ? 'toolsBar admin' : 'toolsBar student'\"></div>\r\n\r\n    <div *ngIf=\"!loginService.isAdmin\">\r\n      <div id=\"lateral-panel\" [ngClass]=\"showMenu ? 'left-zero' : 'hidden-menu'\" *ngIf=\"!this.loginService.isAdmin\">\r\n        <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"indexTreeControl\" class=\"index-tree\">\r\n          <!-- This is the tree node template for leaf nodes -->\r\n          <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n            <li class=\"mat-tree-node white-text\" (click)=\"expandNode(node)\">\r\n              <!-- use a disabled button to provide padding for tree leaf -->\r\n              <button mat-icon-button disabled></button>\r\n              {{node?.name}}\r\n            </li>\r\n          </mat-tree-node>\r\n          <!-- This is the tree node template for expandable nodes -->\r\n          <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\r\n            <li>\r\n              <div class=\"mat-tree-node white-text\" (click)=\"expandNode(node)\">\r\n                <button mat-icon-button disabled></button>\r\n                {{node?.name}}\r\n              </div>\r\n              <ul [class.example-tree-invisible]=\"!indexTreeControl.isExpanded(node)\">\r\n                <ng-container matTreeNodeOutlet></ng-container>\r\n              </ul>\r\n            </li>\r\n          </mat-nested-tree-node>\r\n        </mat-tree>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"module-content\" [ngClass]=\"showMenu ? 'with-menu' : 'without-menu'\">\r\n      <h1 class=\"menu-margin\">{{module?.name}}\r\n        <button *ngIf=\"loginService.isAdmin\" mat-icon-button class=\"add-block-button title\" (click)=\"addBlock(module)\" matTooltip=\"Añadir bloque\" [matTooltipPosition]=\"optionInfoPosition\"><mat-icon>add</mat-icon></button>\r\n      </h1>\r\n      <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree menu-margin\">\r\n        <!-- This is the tree node template for leaf nodes -->\r\n        <mat-tree-node *matTreeNodeDef=\"let node1\" matTreeNodeToggle>\r\n          <li class=\"mat-tree-node\" id=\"{{node1.name}}\">\r\n            <!-- use a disabled button to provide padding for tree leaf -->\r\n            <button mat-icon-button disabled></button>\r\n            <mat-card class=\"lesson-button\">\r\n              {{node1?.name}} <mat-icon class=\"lesson-view-button\" (click)=\"viewLesson(node1.id)\" matTooltip=\"Ver lección\" [matTooltipPosition]=\"viewLessonPosition\">subscriptions</mat-icon>\r\n            </mat-card>\r\n            <button *ngIf=\"loginService.isAdmin\" mat-icon-button class=\"delete-block-button lesson\" (click)=\"deleteBlock(node1, node1?.id)\" matTooltip=\"Eliminar\" [matTooltipPosition]=\"optionInfoPosition\"><mat-icon>delete</mat-icon></button>\r\n          </li>\r\n        </mat-tree-node>\r\n        <!-- This is the tree node template for expandable nodes -->\r\n        <mat-nested-tree-node *matTreeNodeDef=\"let node2; when: hasChild\">\r\n          <li id=\"{{node2.name}}\">\r\n            <div class=\"mat-tree-node\">\r\n              <button mat-icon-button matTreeNodeToggle\r\n                      [attr.aria-label]=\"'toggle ' + node2?.name\">\r\n                <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                  {{treeControl.isExpanded(node2) ? 'expand_more' : 'chevron_right'}}\r\n                </mat-icon>\r\n              </button>\r\n              <h3>{{node2?.name}}</h3>\r\n              <button *ngIf=\"loginService.isAdmin\" mat-icon-button class=\"add-block-button\" (click)=\"addBlock(node2)\" matTooltip=\"Añadir bloque\" [matTooltipPosition]=\"optionInfoPosition\"><mat-icon>add</mat-icon></button>\r\n              <button *ngIf=\"loginService.isAdmin\" mat-icon-button class=\"delete-block-button\" (click)=\"deleteBlock(node2, node2?.id)\" matTooltip=\"Eliminar\" [matTooltipPosition]=\"optionInfoPosition\"><mat-icon>delete</mat-icon></button>\r\n            </div>\r\n            <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node2)\">\r\n              <ng-container matTreeNodeOutlet></ng-container>\r\n            </ul>\r\n          </li>\r\n        </mat-nested-tree-node>\r\n      </mat-tree>\r\n\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/itinerary/module/moduleEditor/module-editor.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleEditor/module-editor.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModuleEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleEditorComponent", function() { return ModuleEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../tab/tab.service */ "./src/app/tab/tab.service.ts");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../module.service */ "./src/app/itinerary/module/module.service.ts");
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../course/course.service */ "./src/app/course/course.service.ts");
/* harmony import */ var _units_blocks_tool_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./units-blocks-tool.component */ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../confirmAction/confirm-action.component */ "./src/app/confirmAction/confirm-action.component.ts");
















var ModuleEditorComponent = /** @class */ (function () {
    function ModuleEditorComponent(router, activatedRoute, dialogService, loginService, unitService, bottomSheet, tabService, moduleService, courseService, document, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.loginService = loginService;
        this.unitService = unitService;
        this.bottomSheet = bottomSheet;
        this.tabService = tabService;
        this.moduleService = moduleService;
        this.courseService = courseService;
        this.dialog = dialog;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["NestedTreeControl"](function (node) { return !!node && node.blocks; });
        this.indexTreeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["NestedTreeControl"](function (node) { return !!node && node.blocks; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeNestedDataSource"]();
        this.activeTab = 0;
        this.viewLessonPosition = 'after';
        this.optionInfoPosition = 'after';
        this.confirmText = 'Se eliminará el modulo permanentemente';
        this.confirmText2 = 'Se eliminará permanentemente';
        this.button1 = 'Cancelar';
        this.button2 = 'Borrar';
        this.hasChild = function (_, node) { return !!node && !!node.blocks && node.blocks.length > 0; };
    }
    ModuleEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.table = new Map();
        this.activatedRoute.params.subscribe(function (params) {
            if (_this.loginService.isAdmin) {
                _this.showMenu = false;
            }
            else {
                _this.showMenu = true;
            }
            _this.unitId = params.unitId;
            _this.courseId = params.courseId;
            _this.moduleId = params.moduleId;
            _this.moduleService.getModule(_this.moduleId).subscribe(function (module) {
                _this.module = module;
                _this.dataSource.data = _this.module.blocks;
                for (var _i = 0, _a = _this.module.blocks; _i < _a.length; _i++) {
                    var block = _a[_i];
                    _this.completeTable(block, _this.module.id);
                }
                _this.indexTreeControl.dataNodes = _this.dataSource.data;
                _this.indexTreeControl.expandAll();
                if (_this.unitId !== undefined) {
                    _this.unitService.getUnit(_this.unitId).subscribe(function (unit) {
                        _this.tabService.setUnitModule(unit.name, _this.unitId, module.name, module.id);
                    });
                }
                else {
                    _this.courseService.getCourse(_this.courseId).subscribe(function (course) {
                        _this.tabService.setCourseModule(course.module.id, course.id, course.name);
                    });
                }
            });
        });
    };
    ModuleEditorComponent.prototype.completeTable = function (block, id) {
        if (typeof block.blocks !== 'undefined') {
            for (var _i = 0, _a = block.blocks; _i < _a.length; _i++) {
                var b = _a[_i];
                this.completeTable(b, block.id);
                this.table.set(block, id);
            }
        }
        else {
            this.table.set(block, id);
        }
    };
    ModuleEditorComponent.prototype.expandNode = function (node) {
        this.expandParents(this.module, node.id);
        this.treeControl.expand(node);
        window.scrollTo(document.getElementById(node.name).offsetLeft, document.getElementById(node.name).offsetTop);
    };
    ModuleEditorComponent.prototype.expandParents = function (node, id) {
        if (node.id === id) {
            this.treeControl.expand(node);
            return true;
        }
        else {
            if (node.blocks !== undefined) {
                for (var _i = 0, _a = node.blocks; _i < _a.length; _i++) {
                    var module = _a[_i];
                    if (this.expandParents(module, id)) {
                        this.treeControl.expand(node);
                        return true;
                    }
                }
                return false;
            }
            else {
                return false;
            }
        }
    };
    ModuleEditorComponent.prototype.viewLesson = function (lessonId) {
        if (this.loginService.isAdmin) {
            this.router.navigate(['/units/' + this.unitId + '/modules/' + this.moduleId + '/lessons/' + lessonId]);
        }
        else {
            this.router.navigate(['/units/' + this.courseId + '/modules/' + this.moduleId + '/lessons/' + lessonId]);
        }
    };
    ModuleEditorComponent.prototype.addBlock = function (node) {
        var _this = this;
        this.bottomSheet.open(_units_blocks_tool_component__WEBPACK_IMPORTED_MODULE_13__["UnitsBlocksToolComponent"], {
            data: node,
        }).afterDismissed().subscribe(function () {
            _this.ngOnInit();
        });
    };
    ModuleEditorComponent.prototype.deleteBlock = function (node, id) {
        var _this = this;
        var parrentId = this.table.get(node);
        var dialogRef = this.dialog.open(_confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmActionComponent"], {
            data: { confirmText: this.confirmText2, button1: this.button1, button2: this.button2 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.moduleService.deleteBlock(parrentId, id).subscribe(function () {
                    _this.ngOnInit();
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModuleEditorComponent.prototype, "tree", void 0);
    ModuleEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-module-editor',
            template: __webpack_require__(/*! ./module-editor.component.html */ "./src/app/itinerary/module/moduleEditor/module-editor.component.html"),
            styles: [__webpack_require__(/*! ./module-editor.component.css */ "./src/app/itinerary/module/moduleEditor/module-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_2__["TdDialogService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_9__["UnitService"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"],
            _tab_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _module_service__WEBPACK_IMPORTED_MODULE_11__["ModuleService"],
            _course_course_service__WEBPACK_IMPORTED_MODULE_12__["CourseService"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]])
    ], ModuleEditorComponent);
    return ModuleEditorComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searcher {\r\n  margin-left: 30%;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.cardin {\r\n  margin: 0.5rem;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-invalid .mat-input-element, .mat-warn .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-label {\r\n  color: rgba(0,0,0,.6)!important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L21vZHVsZS9tb2R1bGVFZGl0b3IvdW5pdHMtYmxvY2tzLXRvb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L21vZHVsZS9tb2R1bGVFZGl0b3IvdW5pdHMtYmxvY2tzLXRvb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNhcmRpbiB7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC42KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <mat-form-field id=\"searcher\">\r\n      <input matInput (keyup)=\"applyFilterUnits($event.target.value)\" placeholder=\"Nombre de la unidad\">\r\n    </mat-form-field>\r\n\r\n    <mat-accordion *ngFor = \"let unit of this.unitsResult\">\r\n      <mat-expansion-panel class=\"card\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            {{unit.name}}\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-tab-group>\r\n          <mat-tab *ngIf=\"unit.lessons.length > 0 && this.data != undefined\" label=\"Lecciones\">\r\n            <div *ngFor = \"let lesson of unit.lessons\">\r\n              <mat-card class=\"cardin\">\r\n                {{lesson.name}}\r\n                <button mat-icon-button matTooltip=\"Añadir\" [matTooltipPosition]=\"copyInfoPosition\"\r\n                      (click)=\"addBlockInToModule($event, lesson)\" *ngIf=\"this.data != undefined\">\r\n                  <mat-icon>add</mat-icon>\r\n                </button>\r\n                <button mat-icon-button matTooltip=\"Añadir\" [matTooltipPosition]=\"copyInfoPosition\"\r\n                        (click)=\"addModuleIntoCourse($event, lesson)\" *ngIf=\"this.data == undefined\">\r\n                  <mat-icon>add</mat-icon>\r\n                </button>\r\n              </mat-card>\r\n            </div>\r\n          </mat-tab>\r\n          <mat-tab *ngIf=\"unit.modules.length > 0\" label=\"Módulos\">\r\n            <div *ngFor = \"let module of unit.modules\">\r\n              <mat-card class=\"cardin\">\r\n                {{module.name}}\r\n                <button mat-icon-button matTooltip=\"Añadir\" [matTooltipPosition]=\"copyInfoPosition\"\r\n                        (click)=\"addBlockInToModule($event, module)\" *ngIf=\"this.data != undefined\">\r\n                  <mat-icon>add</mat-icon>\r\n                </button>\r\n                <button mat-icon-button matTooltip=\"Añadir\" [matTooltipPosition]=\"copyInfoPosition\"\r\n                        (click)=\"addModuleIntoCourse($event, module)\" *ngIf=\"this.data == undefined\">\r\n                  <mat-icon>add</mat-icon>\r\n                </button>\r\n              </mat-card>\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.ts ***!
  \******************************************************************************/
/*! exports provided: UnitsBlocksToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsBlocksToolComponent", function() { return UnitsBlocksToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../module.service */ "./src/app/itinerary/module/module.service.ts");







var UnitsBlocksToolComponent = /** @class */ (function () {
    function UnitsBlocksToolComponent(router, activatedRoute, unitService, moduleService, bottomSheetRef, clipboardService, data) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.unitService = unitService;
        this.moduleService = moduleService;
        this.bottomSheetRef = bottomSheetRef;
        this.clipboardService = clipboardService;
        this.data = data;
        this.copyInfoPosition = 'after';
    }
    UnitsBlocksToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unitService.getUnits().subscribe(function (data) {
            _this.units = [];
            _this.unitsResult = [];
            data.forEach(function (unit) {
                _this.units.push({
                    id: unit.id,
                    name: unit.name,
                    lessons: unit.lessons,
                    modules: unit.modules
                });
                _this.unitsResult = _this.units;
            });
        });
    };
    UnitsBlocksToolComponent.prototype.applyFilterUnits = function (value) {
        this.unitsResult = [];
        for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
            var result = _a[_i];
            if (result.name.toLowerCase().includes(value.toLowerCase())) {
                this.unitsResult.push(result);
            }
        }
    };
    UnitsBlocksToolComponent.prototype.addBlockInToModule = function (event, block) {
        var _this = this;
        if (!this.data.parentsId.includes(block.id)) {
            this.moduleService.addBlock(this.data.id, block).subscribe(function () {
                _this.bottomSheetRef.dismiss();
                event.preventDefault();
            });
        }
        else {
            console.log('No se puede añadir');
        }
    };
    UnitsBlocksToolComponent.prototype.addModuleIntoCourse = function (event, block) {
        this.bottomSheetRef.dismiss(block);
        event.preventDefault();
    };
    UnitsBlocksToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./units-blocks-tool.component.html */ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.html"),
            styles: [__webpack_require__(/*! ./units-blocks-tool.component.css */ "./src/app/itinerary/module/moduleEditor/units-blocks-tool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"],
            _module_service__WEBPACK_IMPORTED_MODULE_6__["ModuleService"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetRef"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"], Object])
    ], UnitsBlocksToolComponent);
    return UnitsBlocksToolComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/module/moduleForm/module-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/itinerary/module/moduleForm/module-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addItinerary-button {\r\n  background-color: #7d3c90;\r\n  color: white;\r\n}\r\n\r\n.itinerary-form {\r\n  text-align: center;\r\n}\r\n\r\n.itinerary-form-buttons {\r\n  margin-left: 5.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L21vZHVsZS9tb2R1bGVGb3JtL21vZHVsZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaXRpbmVyYXJ5L21vZHVsZS9tb2R1bGVGb3JtL21vZHVsZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkSXRpbmVyYXJ5LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkM2M5MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pdGluZXJhcnktZm9ybSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRpbmVyYXJ5LWZvcm0tYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/itinerary/module/moduleForm/module-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleForm/module-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n\r\n  <div class=\"itinerary-form\">\r\n    <h1 mat-dialog-title>NUEVO MÓDULO</h1>\r\n    <div mat-dialog-content>\r\n      <mat-form-field>\r\n        <mat-label>Nombre del módulo</mat-label>\r\n        <input matInput [(ngModel)]=\"data.itinerary.name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions class=\"itinerary-form-buttons\">\r\n      <button mat-button (click)=\"onNoClick()\">Cancelar</button>\r\n      <button mat-button class=\"addItinerary-button\" [mat-dialog-close]=\"data.itinerary\" cdkFocusInitial>Añadir</button>\r\n    </div>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/itinerary/module/moduleForm/module-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/itinerary/module/moduleForm/module-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModuleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleFormComponent", function() { return ModuleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var ModuleFormComponent = /** @class */ (function () {
    function ModuleFormComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModuleFormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModuleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./module-form.component.html */ "./src/app/itinerary/module/moduleForm/module-form.component.html"),
            styles: [__webpack_require__(/*! ./module-form.component.css */ "./src/app/itinerary/module/moduleForm/module-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ModuleFormComponent);
    return ModuleFormComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/module/moduleRename/module-rename.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleRename/module-rename.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dialog {\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  text-align: center;\r\n}\r\n\r\n#info {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n#discard-button {\r\n  background-color: #f9c4c4;\r\n  margin-left: 1.5rem;\r\n  margin-right: 1.5rem;\r\n}\r\n\r\n#discard-button:hover {\r\n  background-color: #e4b3b3;\r\n}\r\n\r\n#save-button {\r\n  background-color: #e7e3f9;\r\n  margin-left: 1.5rem;\r\n  margin-right: 1.5rem;\r\n}\r\n\r\n#save-button {\r\n  background-color: #d7d4e8;\r\n}\r\n\r\n#courseName {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRpbmVyYXJ5L21vZHVsZS9tb2R1bGVSZW5hbWUvbW9kdWxlLXJlbmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9pdGluZXJhcnkvbW9kdWxlL21vZHVsZVJlbmFtZS9tb2R1bGUtcmVuYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlhbG9nIHtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbSAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2luZm8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbiNkaXNjYXJkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YzRjNDtcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4jZGlzY2FyZC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGIzYjM7XHJcbn1cclxuXHJcbiNzYXZlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTNmOTtcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4jc2F2ZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZTg7XHJcbn1cclxuXHJcbiNjb3Vyc2VOYW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/itinerary/module/moduleRename/module-rename.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleRename/module-rename.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\r\n  <input matInput id=\"courseName\" [(ngModel)]=\"data.name\" placeholder=\"{{data.name}}\"/>\r\n  <button id=\"save-button\" mat-button (click)=\"saveChanges()\">Guardar</button>\r\n  <button id=\"discard-button\" mat-button (click)=\"onNoClick()\">Cancelar</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/itinerary/module/moduleRename/module-rename.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/itinerary/module/moduleRename/module-rename.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModuleRenameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleRenameComponent", function() { return ModuleRenameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ModuleRenameComponent = /** @class */ (function () {
    function ModuleRenameComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModuleRenameComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModuleRenameComponent.prototype.saveChanges = function () {
        this.dialogRef.close(this.data.name);
    };
    ModuleRenameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./module-rename.component.html */ "./src/app/itinerary/module/moduleRename/module-rename.component.html"),
            styles: [__webpack_require__(/*! ./module-rename.component.css */ "./src/app/itinerary/module/moduleRename/module-rename.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ModuleRenameComponent);
    return ModuleRenameComponent;
}());



/***/ }),

/***/ "./src/app/itinerary/module/unit-module.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/itinerary/module/unit-module.service.ts ***!
  \*********************************************************/
/*! exports provided: UnitModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitModuleService", function() { return UnitModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UnitModuleService = /** @class */ (function () {
    function UnitModuleService(http) {
        this.http = http;
        this.baseUrl = '/api/units/';
    }
    UnitModuleService.prototype.addModule = function (unitId, module) {
        var body = JSON.stringify(module);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.baseUrl + unitId + '/modules', body, { headers: headers });
    };
    UnitModuleService.prototype.deleteModule = function (unitId, moduleId) {
        return this.http.delete(this.baseUrl + unitId + '/modules/' + moduleId);
    };
    UnitModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UnitModuleService);
    return UnitModuleService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-container {\r\n  text-align: center;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -14rem;\r\n  padding: 2rem;\r\n  width: 24rem;\r\n  border-radius: 0.2rem;\r\n  background-color: rgba(228, 229, 255, 0.5);\r\n  z-index: 100;\r\n  margin-top: 10rem;\r\n}\r\n\r\n#login-user, #login-password, #login-button {\r\n  margin: 2rem;\r\n}\r\n\r\n@-webkit-keyframes move_wave {\r\n  0% {\r\n    transform: translateX(0) translateZ(0) scaleY(1)\r\n  }\r\n  50% {\r\n    transform: translateX(-25%) translateZ(0) scaleY(0.55)\r\n  }\r\n  100% {\r\n    transform: translateX(-50%) translateZ(0) scaleY(1)\r\n  }\r\n}\r\n\r\n@keyframes move_wave {\r\n  0% {\r\n    transform: translateX(0) translateZ(0) scaleY(1)\r\n  }\r\n  50% {\r\n    transform: translateX(-25%) translateZ(0) scaleY(0.55)\r\n  }\r\n  100% {\r\n    transform: translateX(-50%) translateZ(0) scaleY(1)\r\n  }\r\n}\r\n\r\n.waveWrapper {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 80%;\r\n  top: 0;\r\n  margin: auto;\r\n}\r\n\r\n.waveWrapperInner {\r\n  position: absolute;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  height: 100%;\r\n  background-image: linear-gradient(to top, rgba(213, 230, 255, 0.5) 20%, rgba(55, 32, 113, 0.53) 80%);\r\n}\r\n\r\n.bgTop {\r\n  z-index: 15;\r\n  opacity: 0.5;\r\n}\r\n\r\n.bgMiddle {\r\n  z-index: 10;\r\n  opacity: 0.75;\r\n}\r\n\r\n.bgBottom {\r\n  z-index: 5;\r\n}\r\n\r\n.wave {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 200%;\r\n  height: 100%;\r\n  background-repeat: repeat no-repeat;\r\n  background-position: 0 bottom;\r\n  transform-origin: center bottom;\r\n}\r\n\r\n.waveTop {\r\n  background-size: 50% 100px;\r\n}\r\n\r\n.waveAnimation .waveTop {\r\n  animation: move-wave 9s;\r\n  -webkit-animation: move-wave 9s;\r\n  -webkit-animation-delay: 3s;\r\n  animation-delay: 3s;\r\n}\r\n\r\n.waveMiddle {\r\n  background-size: 50% 120px;\r\n}\r\n\r\n.waveAnimation .waveMiddle {\r\n  -webkit-animation: move_wave 30s linear infinite;\r\n          animation: move_wave 30s linear infinite;\r\n}\r\n\r\n.waveBottom {\r\n  background-size: 50% 100px;\r\n}\r\n\r\n.waveAnimation .waveBottom {\r\n  -webkit-animation: move_wave 45s linear infinite;\r\n          animation: move_wave 45s linear infinite;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0U7RUFDRjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0U7RUFDRjtBQUNGOztBQVZBO0VBQ0U7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLE1BQU07RUFDTixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0dBQW9HO0FBQ3RHOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QiwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsZ0RBQXdDO1VBQXhDLHdDQUF3QztBQUMxQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW4tY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTE0cmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgd2lkdGg6IDI0cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI5LCAyNTUsIDAuNSk7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xyXG59XHJcblxyXG4jbG9naW4tdXNlciwgI2xvZ2luLXBhc3N3b3JkLCAjbG9naW4tYnV0dG9uIHtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZV93YXZlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWigwKSBzY2FsZVkoMSlcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKSB0cmFuc2xhdGVaKDApIHNjYWxlWSgwLjU1KVxyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlWSgxKVxyXG4gIH1cclxufVxyXG4ud2F2ZVdyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiA4MCU7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ud2F2ZVdyYXBwZXJJbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjEzLCAyMzAsIDI1NSwgMC41KSAyMCUsIHJnYmEoNTUsIDMyLCAxMTMsIDAuNTMpIDgwJSk7XHJcbn1cclxuLmJnVG9wIHtcclxuICB6LWluZGV4OiAxNTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmJnTWlkZGxlIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBvcGFjaXR5OiAwLjc1O1xyXG59XHJcbi5iZ0JvdHRvbSB7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4ud2F2ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbn1cclxuLndhdmVUb3Age1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIDEwMHB4O1xyXG59XHJcbi53YXZlQW5pbWF0aW9uIC53YXZlVG9wIHtcclxuICBhbmltYXRpb246IG1vdmUtd2F2ZSA5cztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS13YXZlIDlzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcztcclxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG59XHJcbi53YXZlTWlkZGxlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMjBweDtcclxufVxyXG4ud2F2ZUFuaW1hdGlvbiAud2F2ZU1pZGRsZSB7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlX3dhdmUgMzBzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4ud2F2ZUJvdHRvbSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgMTAwcHg7XHJcbn1cclxuLndhdmVBbmltYXRpb24gLndhdmVCb3R0b20ge1xyXG4gIGFuaW1hdGlvbjogbW92ZV93YXZlIDQ1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <div class=\"waveWrapper waveAnimation\">\r\n      <div class=\"waveWrapperInner bgTop\">\r\n        <div class=\"wave waveTop\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')\"></div>\r\n      </div>\r\n      <div class=\"waveWrapperInner bgMiddle\">\r\n        <div class=\"wave waveMiddle\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')\"></div>\r\n      </div>\r\n      <div class=\"waveWrapperInner bgBottom\">\r\n        <div class=\"wave waveBottom\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"login-container\">\r\n      <h1>Santatecla</h1>\r\n      <mat-dialog-content>\r\n        <form (keyup.enter)=\"login($event, userElement.value, passElement.value)\">\r\n\r\n          <div layout=\"row\" id=\"login-user\">\r\n            <mat-form-field flex>\r\n              <input matInput #userElement #userControl=\"ngModel\" placeholder=\"Usuario\" type=\"text\"\r\n                     maxlength=\"30\" name=\"username\" [(ngModel)]=\"username\" required id=\"username\">\r\n              <span matPrefix>\r\n                      <mat-icon>person</mat-icon>\r\n                    </span>\r\n              <mat-hint>{{userElement.value.length}} / 30</mat-hint>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div layout=\"row\" id=\"login-password\">\r\n            <mat-form-field flex>\r\n              <input matInput #passElement #passControl=\"ngModel\" placeholder=\"Contraseña\" type=\"password\"\r\n                     name=\"password\" [(ngModel)]=\"password\" required id=\"password\">\r\n              <span matPrefix>\r\n                      <mat-icon>lock</mat-icon>\r\n              </span>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </form>\r\n\r\n        <div id=\"login-button\">\r\n          <button type=\"button\" mat-stroked-button color=\"primary\" class=\"text-upper\" (click)=\"login($event, userElement.value, passElement.value)\" id=\"send-login-button\">Login</button>\r\n        </div>\r\n\r\n      </mat-dialog-content>\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRoute, loginService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
    }
    LoginComponent.prototype.login = function (event, user, pass) {
        var _this = this;
        event.preventDefault();
        this.loginService.login(user, pass).subscribe(function (u) {
            if (_this.url === '/') {
                if (u.roles.includes('ROLE_ADMIN')) {
                    _this.router.navigate(['/']);
                }
                else {
                    _this.router.navigate(['/courses']);
                }
            }
            else {
                _this.router.navigate([_this.url]);
            }
        }, function (error) { return alert('Invalid user or password'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginComponent.prototype, "url", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  height: 3rem;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  color: white;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.home-button {\r\n  margin-left: -0.5rem !important;\r\n}\r\n\r\n.user-header {\r\n  background-color: #05132f;\r\n}\r\n\r\n.admin-header {\r\n  background-color: #1e042f;\r\n}\r\n\r\n#user-name {\r\n  position: absolute;\r\n  top: 0.8rem;\r\n  right: 3rem;\r\n  margin: 0.2rem;\r\n}\r\n\r\n#logout-button {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0.2rem;\r\n}\r\n\r\n.mat-icon {\r\n  padding: 0;\r\n  margin: -0.1rem 0 0 0;\r\n}\r\n\r\n.nav-button {\r\n  margin-left: 0;\r\n  padding: 0 2rem 0 2rem;\r\n  cursor: pointer;\r\n  display: inline;\r\n  height: 3rem;\r\n  top: 0;\r\n  transform: skewX(-20deg);\r\n}\r\n\r\n.user-nav-button {\r\n  background-image: linear-gradient(to right, #0d2865 0%, #05132f 100%);\r\n}\r\n\r\n.admin-nav-button {\r\n  background-image: linear-gradient(to right, #571a69 0%, #1e042f 100%);\r\n}\r\n\r\n.nav-button-icon {\r\n  transform: skewX(20deg);\r\n}\r\n\r\n.nav-button-name {\r\n  display: inline-block;\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n  min-width: 2rem;\r\n  transform: skewX(20deg);\r\n}\r\n\r\n.nav-button-title {\r\n  position: absolute;\r\n  top: -0.6rem;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.admin-nav-button-title {\r\n  color: #dcc3e3;\r\n}\r\n\r\n.user-nav-button-title {\r\n  color: #abb8d4;\r\n}\r\n\r\n.nav-button-content {\r\n  position: relative;\r\n  top: 0.3rem;\r\n}\r\n\r\n#tab-wrapper {\r\n  margin-right: 13rem;\r\n  top: 0.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBS04sd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUVBQXFFO0FBQ3ZFOztBQUVBO0VBQ0UscUVBQXFFO0FBQ3ZFOztBQUVBO0VBS0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUtmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmhvbWUtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogLTAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTEzMmY7XHJcbn1cclxuXHJcbi5hZG1pbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTA0MmY7XHJcbn1cclxuXHJcbiN1c2VyLW5hbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAuOHJlbTtcclxuICByaWdodDogM3JlbTtcclxuICBtYXJnaW46IDAuMnJlbTtcclxufVxyXG5cclxuI2xvZ291dC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAwLjJyZW07XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IC0wLjFyZW0gMCAwIDA7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBwYWRkaW5nOiAwIDJyZW0gMCAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHRvcDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XHJcbn1cclxuXHJcbi51c2VyLW5hdi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBkMjg2NSAwJSwgIzA1MTMyZiAxMDAlKTtcclxufVxyXG5cclxuLmFkbWluLW5hdi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU3MWE2OSAwJSwgIzFlMDQyZiAxMDAlKTtcclxufVxyXG5cclxuLm5hdi1idXR0b24taWNvbiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcclxufVxyXG5cclxuLm5hdi1idXR0b24tbmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgbWluLXdpZHRoOiAycmVtO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMC42cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uYWRtaW4tbmF2LWJ1dHRvbi10aXRsZSB7XHJcbiAgY29sb3I6ICNkY2MzZTM7XHJcbn1cclxuXHJcbi51c2VyLW5hdi1idXR0b24tdGl0bGUge1xyXG4gIGNvbG9yOiAjYWJiOGQ0O1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwLjNyZW07XHJcbn1cclxuXHJcbiN0YWItd3JhcHBlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxM3JlbTtcclxuICB0b3A6IDAuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <div *ngIf=\"loginService.isLogged\" [ngClass]=\"loginService.isAdmin ? 'header admin-header' : 'header user-header'\">\r\n\r\n      <div id=\"tab-wrapper\">\r\n\r\n        <button mat-button *ngIf=\"loginService.isAdmin\" class=\"nav-button admin-nav-button home-button\" [routerLink]=\"['/']\">\r\n          <mat-icon class=\"nav-button-icon\">home</mat-icon>\r\n          <div class=\"nav-button-name\">Inicio</div>\r\n        </button>\r\n\r\n        <button mat-button *ngIf=\"tabService.courses\" [ngClass]=\"loginService.isAdmin ? 'nav-button admin-nav-button home-button' : 'nav-button user-nav-button home-button'\" [routerLink]=\"['/courses']\">\r\n          <mat-icon class=\"nav-button-icon\">class</mat-icon>\r\n          <div class=\"nav-button-name\">Cursos</div>\r\n        </button>\r\n\r\n        <button mat-button *ngIf=\"loginService.isAdmin && tabService.units\" [ngClass]=\"loginService.isAdmin ? 'nav-button admin-nav-button' : 'nav-button user-nav-button'\" [routerLink]=\"['/unit']\">\r\n          <img class=\"nav-button-icon\" src=\"../../assets/img/uml-icon.png\" height=\"15\">\r\n          <div class=\"nav-button-name\">Unidades</div>\r\n        </button>\r\n\r\n        <button mat-button *ngIf=\"loginService.isAdmin && tabService.unit\" [ngClass]=\"loginService.isAdmin ? 'nav-button admin-nav-button' : 'nav-button user-nav-button'\" [routerLink]=\"['/unit/', tabService.unitId]\">\r\n          <div class=\"nav-button-name\">\r\n            <span [ngClass]=\"loginService.isAdmin ? 'nav-button-title admin-nav-button-title' : 'nav-button-title user-nav-button-title'\">Unidad</span>\r\n            <span class=\"nav-button-content\">{{tabService.unit}}</span>\r\n          </div>\r\n        </button>\r\n\r\n        <button mat-button *ngIf=\"tabService.course && loginService.isAdmin\" [ngClass]=\"loginService.isAdmin ? 'nav-button admin-nav-button' : 'nav-button user-nav-button'\" [routerLink]=\"['/course/' + tabService.courseId]\">\r\n          <div class=\"nav-button-name\">\r\n            <span [ngClass]=\"loginService.isAdmin ? 'nav-button-title admin-nav-button-title' : 'nav-button-title user-nav-button-title'\">Curso</span>\r\n            <span class=\"nav-button-content\">{{tabService.course}}</span>\r\n          </div>\r\n        </button>\r\n\r\n        <button mat-button *ngIf=\"tabService.course && !loginService.isAdmin\" [ngClass]=\"loginService.isAdmin ? 'nav-button admin-nav-button' : 'nav-button user-nav-button'\" [routerLink]=\"['/course/' + tabService.courseId + '/modules/' + tabService.moduleId]\">\r\n          <div class=\"nav-button-name\">\r\n            <span [ngClass]=\"loginService.isAdmin ? 'nav-button-title admin-nav-button-title' : 'nav-button-title user-nav-button-title'\">Curso</span>\r\n            <span class=\"nav-button-content\">{{tabService.course}}</span>\r\n          </div>\r\n        </button>\r\n\r\n        <button mat-button *ngIf=\"loginService.isAdmin && tabService.module\" [ngClass]=\"loginService.isAdmin ? 'nav-button admin-nav-button' : 'nav-button user-nav-button'\" [routerLink]=\"['/units/' + tabService.unitId + '/modules/' + tabService.moduleId]\">\r\n          <div class=\"nav-button-name\">\r\n            <span [ngClass]=\"loginService.isAdmin ? 'nav-button-title admin-nav-button-title' : 'nav-button-title user-nav-button-title'\">Módulo</span>\r\n            <span class=\"nav-button-content\">{{tabService.module}}</span>\r\n          </div>\r\n        </button>\r\n\r\n        <button mat-button *ngIf=\"tabService.lesson\" [ngClass]=\"loginService.isAdmin ? 'nav-button admin-nav-button' : 'nav-button user-nav-button'\">\r\n          <div class=\"nav-button-name\">\r\n            <span [ngClass]=\"loginService.isAdmin ? 'nav-button-title admin-nav-button-title' : 'nav-button-title user-nav-button-title'\">Lección</span>\r\n            <span class=\"nav-button-content\">{{tabService.lesson}}</span>\r\n          </div>\r\n        </button>\r\n      </div>\r\n\r\n      <span id=\"user-name\">{{loginService.user.name}}</span>\r\n      <button mat-icon-button id=\"logout-button\" (click)=\"logout()\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n      </button>\r\n\r\n    </div>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab/tab.service */ "./src/app/tab/tab.service.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, activatedRoute, loginService, tabService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.tabService = tabService;
    }
    MenuComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().subscribe(function (response) {
            _this.router.navigate(['/']);
        }, function (error) { return console.log('Error when trying to logout: ' + error); });
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _tab_tab_service__WEBPACK_IMPORTED_MODULE_4__["TabService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/progress/class-progress/class-progress.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/progress/class-progress/class-progress.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#image-container {\r\n  width: 10rem;\r\n  display: flex;\r\n  float: right;\r\n}\r\n\r\n#courseName{\r\n  border: 0;\r\n}\r\n\r\n#progressType{\r\n  border: solid #571a69 1px;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.columnWidth{\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\n\r\n.row {\r\n  margin-top: 5%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-basis: 100%;\r\n  flex: 1;\r\n  border:1px solid lightblue;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.green-color {\r\n  color: green;\r\n}\r\n\r\n.red-color {\r\n  color: red;\r\n}\r\n\r\n.top-margin {\r\n  margin-top: 5rem;\r\n  align-content: center;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.letf-margin {\r\n  margin-left:42%\r\n}\r\n\r\n.progress-table {\r\n  height: 25rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.center-align {\r\n  text-align: center;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n\r\n.center-table{\r\n  margin:auto;\r\n}\r\n\r\n.title {\r\n  margin-top: 8rem;\r\n}\r\n\r\n.extended-info{\r\n  cursor: pointer;\r\n}\r\n\r\n#spinner{\r\n  position: relative;\r\n  width: 8rem;\r\n  height: 8rem;\r\n  left: 40%;\r\n  top: 40%;\r\n}\r\n\r\n.histogram{\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3MvY2xhc3MtcHJvZ3Jlc3MvY2xhc3MtcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzL2NsYXNzLXByb2dyZXNzL2NsYXNzLXByb2dyZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2UtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNjb3Vyc2VOYW1le1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuI3Byb2dyZXNzVHlwZXtcclxuICBib3JkZXI6IHNvbGlkICM1NzFhNjkgMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uY29sdW1uV2lkdGh7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5ncmVlbi1jb2xvciB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucmVkLWNvbG9yIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udG9wLW1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGV0Zi1tYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OjQyJVxyXG59XHJcblxyXG4ucHJvZ3Jlc3MtdGFibGUge1xyXG4gIGhlaWdodDogMjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uY2VudGVyLWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyLXRhYmxle1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDhyZW07XHJcbn1cclxuXHJcbi5leHRlbmRlZC1pbmZve1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3NwaW5uZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIGhlaWdodDogOHJlbTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgdG9wOiA0MCU7XHJcbn1cclxuXHJcbi5oaXN0b2dyYW17XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/progress/class-progress/class-progress.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/progress/class-progress/class-progress.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n\r\n  <img src=\"../../../assets/img/spinner.gif\" id=\"spinner\" class=\"top-margin\" *ngIf=\"!classResultsReady\">\r\n\r\n  <div class=\"top-margin\">\r\n    <span *ngIf=\"classResultsReady && !extendedInfo\">\r\n\r\n      <div>\r\n        <mat-form-field class=\"\">\r\n          <input matInput (keyup)=\"applyFilterStudent($event.target.value)\" placeholder=\"Nombre del alumno\">\r\n        </mat-form-field>\r\n        <mat-icon>search</mat-icon>\r\n      </div>\r\n\r\n      <table mat-table [dataSource]=\"this.showingClassResults\" class=\"mat-elevation-z8 center-table\">\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align\">Alumno</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.studentName}} </td>\r\n        </ng-container>\r\n\r\n        <span *ngFor=\"let module of this.courseFormat\">\r\n          <ng-container matColumnDef=\"{{module.moduleName}}\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align extended-info\" (click)=\"showModuleExtendedInfo(module.id, module.moduleName)\"> {{module.moduleName}} </th>\r\n            <td mat-cell *matCellDef=\"let element\">{{element.grades[this.courseFormat.indexOf(module)]}}</td>\r\n          </ng-container>\r\n        </span>\r\n\r\n        <ng-container matColumnDef=\"studentAverage\">\r\n          <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align\">Media</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.average}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"classColumnsToDisplay\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: classColumnsToDisplay;\" class=\"columnWidth center-align\"></tr>\r\n      </table>\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"top-margin\">\r\n    <span *ngIf=\"classResultsReady && extendedInfo\">\r\n\r\n      <div>\r\n        <mat-form-field class=\"\">\r\n          <input matInput (keyup)=\"applyFilterExtendedStudent($event.target.value)\" placeholder=\"Nombre del alumno\">\r\n        </mat-form-field>\r\n        <mat-icon>search</mat-icon>\r\n      </div>\r\n\r\n      <span *ngIf=\"extendedInfo\" class=\"extended-info\" align=\"center\" (click)=\"extendedInfo = false; extendedColumnsToDisplay=['name']\">\r\n        <mat-icon>keyboard_arrow_up</mat-icon>\r\n      </span>\r\n      <table mat-table [dataSource]=\"this.showingExtendedResults\" class=\"mat-elevation-z8 center-table\">\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align\">Alumno</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.studentName}} </td>\r\n        </ng-container>\r\n\r\n        <span *ngFor=\"let question of this.moduleFormat.questions\">\r\n          <ng-container matColumnDef=\"{{question}}\">\r\n            <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align\"> {{question}} </th>\r\n            <td mat-cell *matCellDef=\"let element\">{{element.grades[this.moduleFormat.questions.indexOf(question)]}}</td>\r\n          </ng-container>\r\n        </span>\r\n\r\n        <ng-container matColumnDef=\"studentAverage\">\r\n          <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align\">Media</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.average}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"extendedColumnsToDisplay\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: extendedColumnsToDisplay;\" class=\"columnWidth center-align\"></tr>\r\n      </table>\r\n    </span>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/progress/class-progress/class-progress.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/progress/class-progress/class-progress.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClassProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassProgressComponent", function() { return ClassProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../progress.service */ "./src/app/progress/progress.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../course/course.service */ "./src/app/course/course.service.ts");






var ClassProgressComponent = /** @class */ (function () {
    function ClassProgressComponent(courseService, loginService, activatedRoute, progressService) {
        this.courseService = courseService;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.progressService = progressService;
        this.classColumnsToDisplay = ['name'];
        this.extendedColumnsToDisplay = ['name'];
        this.classResultsReady = false;
        this.extendedInfo = false;
    }
    ClassProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.courseId = params.courseId;
            _this.courseService.getCourse(_this.courseId).subscribe(function (data) {
                _this.course = data;
            }, function (error) { console.log(error); });
            _this.progressService.getClassProgress(_this.courseId).subscribe(function (data) {
                _this.classResults = data;
                _this.showingClassResults = _this.classResults;
                console.log(_this.classResults);
            }, function (error) { console.log(error); });
            _this.progressService.getModuleFormat(_this.courseId).subscribe(function (data) {
                _this.courseFormat = data;
                for (var _i = 0, _a = _this.courseFormat; _i < _a.length; _i++) {
                    var module = _a[_i];
                    _this.classColumnsToDisplay.push(module.moduleName);
                }
                _this.classColumnsToDisplay.push('studentAverage');
                _this.classResultsReady = true;
            }, function (error) { console.log(error); });
        });
    };
    ClassProgressComponent.prototype.showModuleExtendedInfo = function (moduleId, moduleName) {
        var _this = this;
        this.classResultsReady = false;
        this.progressService.getExtendedModuleInfo(this.courseId, moduleId).subscribe(function (data) {
            _this.moduleExtendedResults = data;
            _this.showingExtendedResults = _this.moduleExtendedResults;
            _this.classResultsReady = true;
            _this.extendedInfo = true;
        }, function (error) { console.log(error); });
        for (var _i = 0, _a = this.courseFormat; _i < _a.length; _i++) {
            var module = _a[_i];
            if (module.moduleName === moduleName) {
                this.moduleFormat = module;
            }
        }
        for (var _b = 0, _c = this.moduleFormat.questions; _b < _c.length; _b++) {
            var question = _c[_b];
            this.extendedColumnsToDisplay.push(question);
        }
        this.extendedColumnsToDisplay.push('studentAverage');
    };
    ClassProgressComponent.prototype.applyFilterStudent = function (value) {
        this.showingClassResults = [];
        for (var _i = 0, _a = this.classResults; _i < _a.length; _i++) {
            var result = _a[_i];
            if (result.studentName.toLowerCase().includes(value.toLowerCase())) {
                this.showingClassResults.push(result);
            }
        }
    };
    ClassProgressComponent.prototype.applyFilterExtendedStudent = function (value) {
        this.showingExtendedResults = [];
        for (var _i = 0, _a = this.moduleExtendedResults; _i < _a.length; _i++) {
            var result = _a[_i];
            if (result.studentName.toLowerCase().includes(value.toLowerCase())) {
                this.showingExtendedResults.push(result);
            }
        }
    };
    ClassProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-progress',
            template: __webpack_require__(/*! ./class-progress.component.html */ "./src/app/progress/class-progress/class-progress.component.html"),
            styles: [__webpack_require__(/*! ./class-progress.component.css */ "./src/app/progress/class-progress/class-progress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_course_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _progress_service__WEBPACK_IMPORTED_MODULE_2__["ProgressService"]])
    ], ClassProgressComponent);
    return ClassProgressComponent;
}());



/***/ }),

/***/ "./src/app/progress/module-progress/module-progress.component.css":
/*!************************************************************************!*\
  !*** ./src/app/progress/module-progress/module-progress.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".columnWidth{\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\n\r\n.row {\r\n  margin-top: 5%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-basis: 100%;\r\n  flex: 1;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.top-margin {\r\n  margin-top: 6rem;\r\n  position: absolute;\r\n  margin-left: 40%;\r\n}\r\n\r\n.letf-margin {\r\n  margin-left:32%\r\n}\r\n\r\n.progress-table {\r\n  height: 25rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.center-align {\r\n  text-align: center;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n\r\n.center-table{\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  margin-top: 8rem;\r\n}\r\n\r\n.extended-info{\r\n  cursor: pointer;\r\n}\r\n\r\n#spinner{\r\n  position: relative;\r\n  width: 8rem;\r\n  height: 8rem;\r\n  left: 40%;\r\n  top: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3MvbW9kdWxlLXByb2dyZXNzL21vZHVsZS1wcm9ncmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmVzcy9tb2R1bGUtcHJvZ3Jlc3MvbW9kdWxlLXByb2dyZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uV2lkdGh7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50b3AtbWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcblxyXG4ubGV0Zi1tYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OjMyJVxyXG59XHJcblxyXG4ucHJvZ3Jlc3MtdGFibGUge1xyXG4gIGhlaWdodDogMjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uY2VudGVyLWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyLXRhYmxle1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDhyZW07XHJcbn1cclxuXHJcbi5leHRlbmRlZC1pbmZve1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3NwaW5uZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIGhlaWdodDogOHJlbTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgdG9wOiA0MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/progress/module-progress/module-progress.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/progress/module-progress/module-progress.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<body>\r\n    <div class=\"row\">\r\n      <div class=\"column\">\r\n        <span *ngIf=\"moduleResultsReady\">\r\n\r\n          <div>\r\n            <mat-form-field class=\"letf-margin\">\r\n              <input matInput (keyup)=\"applyFilterModule($event.target.value)\" placeholder=\"Nombre del módulo\">\r\n            </mat-form-field>\r\n            <mat-icon>search</mat-icon>\r\n          </div>\r\n\r\n          <table mat-table [dataSource]=\"this.showingModuleResults\" class=\"mat-elevation-z8 center-table\">\r\n            <ng-container matColumnDef=\"name\">\r\n              <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align\"> {{this.course.module.name}} </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"realization\">\r\n              <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align\"> % Realización </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.points[0]}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"average\">\r\n              <th mat-header-cell *matHeaderCellDef class=\"columnWidth center-align\"> Media </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.points[1]}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\" class=\"columnWidth center-align\"></tr>\r\n          </table>\r\n\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"column\" *ngIf=\"this.moduleResultsReady\">\r\n        <ngx-charts-bar-vertical\r\n          [results]=\"histogram\"\r\n          [gradient]=\"false\"\r\n          [xAxis]=\"true\"\r\n          [yAxis]=\"true\"\r\n          [legend]=\"false\"\r\n          [showXAxisLabel]=\"true\"\r\n          [showYAxisLabel]=\"true\"\r\n          [xAxisLabel]=\"xAxisLabel\"\r\n          [yAxisLabel]=\"yAxisLabel\">\r\n        </ngx-charts-bar-vertical>\r\n      </div>\r\n\r\n    </div>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/progress/module-progress/module-progress.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/progress/module-progress/module-progress.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModuleProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleProgressComponent", function() { return ModuleProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../progress.service */ "./src/app/progress/progress.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../course/course.service */ "./src/app/course/course.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var ModuleProgressComponent = /** @class */ (function () {
    function ModuleProgressComponent(courseService, loginService, activatedRoute, progressService, _changeDetectorRef, _iconRegistry, _domSanitizer) {
        this.courseService = courseService;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.progressService = progressService;
        this._changeDetectorRef = _changeDetectorRef;
        this._iconRegistry = _iconRegistry;
        this._domSanitizer = _domSanitizer;
        this.columnsToDisplay = ['name', 'realization', 'average'];
        this.moduleResultsReady = false;
        this.histogram = [];
        this.xAxisLabel = 'Tema';
        this.yAxisLabel = 'Media';
    }
    ModuleProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.courseId = params.courseId;
            _this.courseService.getCourse(_this.courseId).subscribe(function (data) {
                _this.course = data;
            }, function (error) { console.log(error); });
            _this.progressService.getModuleProgress(_this.courseId).subscribe(function (data) {
                _this.moduleResults = data;
                _this.showingModuleResults = _this.moduleResults;
                _this.buildHistogramData();
                _this.moduleResultsReady = true;
            }, function (error) { console.log(error); });
        });
        this._iconRegistry.addSvgIconInNamespace('assets', 'covalent', this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
    };
    ModuleProgressComponent.prototype.axisDate = function (val) {
        return new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en').transform(val, 'hh a');
    };
    ModuleProgressComponent.prototype.buildHistogramData = function () {
        for (var _i = 0, _a = this.moduleResults; _i < _a.length; _i++) {
            var module = _a[_i];
            this.histogram.push({ 'name': module.name, 'value': 516 });
        }
    };
    ModuleProgressComponent.prototype.applyFilterModule = function (value) {
        this.showingModuleResults = [];
        for (var _i = 0, _a = this.moduleResults; _i < _a.length; _i++) {
            var result = _a[_i];
            if (result.name.toLowerCase().includes(value.toLowerCase())) {
                this.showingModuleResults.push(result);
            }
        }
    };
    ModuleProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-module-progress',
            template: __webpack_require__(/*! ./module-progress.component.html */ "./src/app/progress/module-progress/module-progress.component.html"),
            styles: [__webpack_require__(/*! ./module-progress.component.css */ "./src/app/progress/module-progress/module-progress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_course_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _progress_service__WEBPACK_IMPORTED_MODULE_2__["ProgressService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], ModuleProgressComponent);
    return ModuleProgressComponent;
}());



/***/ }),

/***/ "./src/app/progress/progress.service.ts":
/*!**********************************************!*\
  !*** ./src/app/progress/progress.service.ts ***!
  \**********************************************/
/*! exports provided: ProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressService", function() { return ProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProgressService = /** @class */ (function () {
    function ProgressService(http) {
        this.http = http;
    }
    ProgressService.prototype.getModuleProgress = function (courseId) {
        return this.http.get('api/course/' + courseId + '/module/progress');
    };
    ProgressService.prototype.getClassProgress = function (courseId) {
        return this.http.get('api/course/' + courseId + '/students/progress');
    };
    ProgressService.prototype.getModuleFormat = function (courseId) {
        return this.http.get('api/course/' + courseId + '/module/format');
    };
    ProgressService.prototype.getExtendedModuleInfo = function (courseId, moduleId) {
        return this.http.get('api/course/' + courseId + '/module/' + moduleId + '/extended');
    };
    ProgressService.prototype.getHistogramInfo = function (courseId) {
        return this.http.get('api/course/' + courseId + '/histogram/');
    };
    ProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProgressService);
    return ProgressService;
}());



/***/ }),

/***/ "./src/app/question/addQuestionDialog/addQuestionDialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/question/addQuestionDialog/addQuestionDialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <body class=\"card-content\">\r\n    <h1 mat-dialog-title *ngIf=\"!data.isEditing\">Añadir nueva pregunta</h1>\r\n    <h1 mat-dialog-title *ngIf=\"data.isEditing\">Editar pregunta</h1>\r\n\r\n    <div mat-dialog-content>\r\n      <div *ngIf=\"!data.isEditing\" class=\"button-row\">\r\n        <button *ngFor=\"let type of questionTypes\" (click)=\"setQuestion(type.id)\"\r\n                [ngClass]=\"subtype == type.id ? 'question-button mat-button active-type' : 'tool question-button mat-button'\">\r\n          {{type.name}}\r\n        </button>\r\n      </div>\r\n\r\n      <!-- DEFINITION FORM -->\r\n      <div *ngIf=\"subtype == 'DefinitionQuestion'\">\r\n        <form class=\"add-question-form\">\r\n          <mat-form-field>\r\n            <textarea matInput name=\"question\" (input)=\"changeTextArea($event)\" placeholder=\"Pregunta\" [(ngModel)]=\"questionInput\" type=\"text\" required>\r\n            </textarea>\r\n          </mat-form-field>\r\n        </form>\r\n      </div>\r\n\r\n      <!--LIST FORM -->\r\n      <div *ngIf=\"subtype == 'ListQuestion'\">\r\n        <form class=\"add-question-form\">\r\n          <div class=\"add-question-form-list\">\r\n            <mat-form-field>\r\n              <textarea matInput name=\"question\" (input)=\"changeTextArea($event)\" placeholder=\"Pregunta\" [(ngModel)]=\"questionInput\" type=\"text\" required>\r\n              </textarea>\r\n            </mat-form-field>\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput name=\"answer\" placeholder=\"Respuesta posible\" [(ngModel)]=\"answerInput\" type=\"text\"/>\r\n              </mat-form-field>\r\n              <mat-checkbox name=\"correct\" [(ngModel)]=\"correct\" value=\"false\">\r\n                Correcta\r\n              </mat-checkbox>\r\n              <button (click)=\"addPossibleListAnswer()\" class=\"mat-button add-answer-button tool\">\r\n                Añadir\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <!-- TEST FORM -->\r\n      <div *ngIf=\"subtype == 'TestQuestion'\">\r\n        <form class=\"add-question-form\">\r\n          <div class=\"add-question-form-list\">\r\n            <mat-form-field>\r\n              <textarea matInput name=\"question\" (input)=\"changeTextArea($event)\" placeholder=\"Pregunta\" [(ngModel)]=\"questionInput\" type=\"text\" required>\r\n              </textarea>\r\n            </mat-form-field>\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput name=\"answer\" placeholder=\"Respuesta posible\"  [(ngModel)]=\"answerInput\" type=\"text\"/>\r\n              </mat-form-field>\r\n              <mat-checkbox name=\"correct\" [(ngModel)]=\"correct\" value=\"false\" [disabled]=\"correctTestAnswerSelected\">\r\n                Correcta\r\n              </mat-checkbox>\r\n              <button (click)=\"addPossibleTestAnswer()\" class=\"mat-button add-answer-button tool\">\r\n                Añadir\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"add-question-form\">\r\n        <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\" *ngFor=\"let answer of bindedAnswerKeys\">\r\n            <p matLine> {{answer}} </p>\r\n            <mat-icon *ngIf=\"possibleAnswers.get(answer)\">done_all</mat-icon>\r\n            <button mat-button (click)=\"deletePossibleAnswer(answer)\" >\r\n              <mat-icon class=\"delete-icon\">clear</mat-icon>\r\n            </button>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button (click)=\"onNoClick()\">Cancelar</button>\r\n      <!--<button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>\r\n        Responder\r\n      </button>-->\r\n      <button (click)=\"sendQuestion()\" [mat-dialog-close]=\"true\" class=\"mat-button question-button tool\">\r\n        Guardar\r\n      </button>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/question/addQuestionDialog/addQuestionDialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/question/addQuestionDialog/addQuestionDialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddQuestionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionDialogComponent", function() { return AddQuestionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question.service */ "./src/app/question/question.service.ts");






var QUESTION_TYPES = [
    { id: 'DefinitionQuestion', name: 'Definición' },
    { id: 'ListQuestion', name: 'Listado' },
    { id: 'TestQuestion', name: 'Test' },
];
var AddQuestionDialogComponent = /** @class */ (function () {
    function AddQuestionDialogComponent(router, questionService, loginService, activatedRoute, dialogRef, snackBar, data) {
        this.router = router;
        this.questionService = questionService;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.data = data;
    }
    AddQuestionDialogComponent.prototype.ngOnInit = function () {
        this.questionTypes = QUESTION_TYPES;
        // Add Question attributes
        this.subtype = 'DefinitionQuestion';
        this.resetAddQuestionForm();
        if (this.data.isEditing) {
            this.setEditQuestionForm();
        }
    };
    AddQuestionDialogComponent.prototype.resetAddQuestionForm = function () {
        this.questionInput = '';
        this.answerInput = '';
        this.possibleAnswers = new Map();
        this.rechargeAnswersKeys();
        this.correct = false;
        this.correctTestAnswerSelected = false;
    };
    AddQuestionDialogComponent.prototype.setEditQuestionForm = function () {
        this.subtype = this.data.question.subtype;
        this.questionInput = this.data.question.questionText;
        this.answerInput = '';
        this.correct = false;
        this.possibleAnswers = new Map();
        if (this.subtype === 'ListQuestion') {
            for (var _i = 0, _a = this.data.question.possibleAnswers; _i < _a.length; _i++) {
                var answer = _a[_i];
                this.possibleAnswers.set(answer, this.data.question.correctAnswers.includes(answer));
            }
        }
        if (this.subtype === 'TestQuestion') {
            for (var _b = 0, _c = this.data.question.possibleAnswers; _b < _c.length; _b++) {
                var answer = _c[_b];
                this.possibleAnswers.set(answer, answer === this.data.question.correctAnswer);
                if (!this.correctTestAnswerSelected) {
                    this.correctTestAnswerSelected = answer === this.data.question.correctAnswer;
                }
            }
        }
        this.rechargeAnswersKeys();
    };
    AddQuestionDialogComponent.prototype.setQuestion = function (subtype) {
        this.subtype = subtype;
        this.resetAddQuestionForm();
    };
    AddQuestionDialogComponent.prototype.rechargeAnswersKeys = function () {
        this.bindedAnswerKeys = Array.from(this.possibleAnswers.keys());
    };
    AddQuestionDialogComponent.prototype.sendQuestion = function () {
        switch (this.subtype) {
            case 'DefinitionQuestion': {
                this.sendDefinitionQuestion();
                break;
            }
            case 'ListQuestion': {
                this.sendListQuestion();
                break;
            }
            case 'TestQuestion': {
                this.sendTestQuestion();
                break;
            }
            default: {
                console.log('Not valid');
                break;
            }
        }
        this.dialogRef.close(1);
    };
    AddQuestionDialogComponent.prototype.sendDefinitionQuestion = function () {
        var _this = this;
        if (this.questionInput === '') {
            // TODO
            console.log('error: inputs cannot be empty');
            return;
        }
        this.definitionQuestion = {
            questionText: this.questionInput,
            subtype: 'DefinitionQuestion'
        };
        if (!this.data.isEditing) {
            this.questionService.addUnitDefinitionQuestion(this.data.unitId, this.definitionQuestion).subscribe(function (_) {
                _this.resetAddQuestionForm();
            }, function (err) { return console.log(err); });
        }
        else {
            this.questionService.editUnitDefinitionQuestion(this.data.unitId, this.data.question.id, this.definitionQuestion).subscribe(function (_) {
                _this.resetAddQuestionForm();
            }, function (err) { return console.log(err); });
        }
    };
    AddQuestionDialogComponent.prototype.sendListQuestion = function () {
        var _this = this;
        if (this.questionInput === '') {
            // TODO
            console.log('error: inputs cannot be empty');
            return;
        }
        var ca = [];
        this.possibleAnswers.forEach(function (value, key) {
            if (value) {
                ca = ca.concat(key);
            }
        });
        this.listQuestion = {
            questionText: this.questionInput,
            subtype: 'ListQuestion',
            possibleAnswers: Array.from(this.possibleAnswers.keys()),
            correctAnswers: ca
        };
        if (!this.data.isEditing) {
            this.questionService.addUnitListQuestion(this.data.unitId, this.listQuestion).subscribe(function (_) {
                _this.resetAddQuestionForm();
            }, function (err) {
                console.log(err);
                _this.ngOnInit();
            });
        }
        else {
            this.questionService.editUnitListQuestion(this.data.unitId, this.data.question.id, this.listQuestion).subscribe(function (_) {
                _this.resetAddQuestionForm();
            }, function (err) {
                console.log(err);
                _this.ngOnInit();
            });
        }
    };
    AddQuestionDialogComponent.prototype.sendTestQuestion = function () {
        var _this = this;
        if (this.questionInput === '') {
            // TODO
            this.openSnackBar('La pregunta no puede estar vacía', 'Entendido');
            console.log('error: inputs cannot be empty');
            return;
        }
        if (!this.correctTestAnswerSelected) {
            this.openSnackBar('Debe haber una respuesta correcta', 'Entendido');
            return;
        }
        var ca = [];
        this.possibleAnswers.forEach(function (value, key) {
            if (value) {
                ca = ca.concat(key);
            }
        });
        this.testQuestion = {
            questionText: this.questionInput,
            subtype: 'TestQuestion',
            possibleAnswers: Array.from(this.possibleAnswers.keys()),
            correctAnswer: ca[0]
        };
        if (!this.data.isEditing) {
            this.questionService.addUnitTestQuestion(this.data.unitId, this.testQuestion).subscribe(function (_) {
                _this.resetAddQuestionForm();
            }, function (err) { return console.log(err); });
        }
        else {
            this.questionService.editUnitTestQuestion(this.data.unitId, this.data.question.id, this.testQuestion).subscribe(function (_) {
                _this.resetAddQuestionForm();
            }, function (err) { return console.log(err); });
        }
    };
    AddQuestionDialogComponent.prototype.addPossibleListAnswer = function () {
        if (this.answerInput === '') {
            // TODO
            this.openSnackBar('La respuesta no puede estar vacía', 'Entendido');
            return;
        }
        if (this.possibleAnswers.has(this.answerInput)) {
            this.openSnackBar('La respuesta está repetida', 'Entendido');
            return;
        }
        this.possibleAnswers = this.possibleAnswers.set(this.answerInput, this.correct);
        this.rechargeAnswersKeys();
        this.answerInput = '';
    };
    AddQuestionDialogComponent.prototype.addPossibleTestAnswer = function () {
        if (this.answerInput === '') {
            // TODO
            this.openSnackBar('La respuesta no puede estar vacía', 'Entendido');
            return;
        }
        if (this.possibleAnswers.has(this.answerInput)) {
            this.openSnackBar('La respuesta está repetida', 'Entendido');
            return;
        }
        if (!this.correctTestAnswerSelected && this.correct) {
            this.possibleAnswers.set(this.answerInput, true);
            this.correct = false;
            this.correctTestAnswerSelected = true;
        }
        else {
            this.possibleAnswers.set(this.answerInput, false);
        }
        this.rechargeAnswersKeys();
        this.answerInput = '';
    };
    AddQuestionDialogComponent.prototype.deletePossibleAnswer = function (answer) {
        if (this.possibleAnswers.get(answer)) {
            this.correctTestAnswerSelected = false;
        }
        this.possibleAnswers.delete(answer);
        this.rechargeAnswersKeys();
    };
    AddQuestionDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close(2);
    };
    AddQuestionDialogComponent.prototype.changeTextArea = function (event) {
        this.fitContent(event.target);
    };
    AddQuestionDialogComponent.prototype.fitContent = function (textArea) {
        textArea.style.overflow = 'hidden';
        textArea.style.height = '0px';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    AddQuestionDialogComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    AddQuestionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./addQuestionDialog.component.html */ "./src/app/question/addQuestionDialog/addQuestionDialog.component.html"),
            styles: [__webpack_require__(/*! ../question.component.css */ "./src/app/question/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object])
    ], AddQuestionDialogComponent);
    return AddQuestionDialogComponent;
}());



/***/ }),

/***/ "./src/app/question/answerQuestionDialog/answerDefinitionDialog.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/question/answerQuestionDialog/answerDefinitionDialog.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <body>\r\n    <h1 mat-dialog-title>{{ data.question.questionText }}</h1>\r\n    <h2 mat-dialog-title>Intentos realizados: {{definitionAnswers?.length}}</h2>\r\n    <div mat-dialog-content>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Respuesta\" [(ngModel)]=\"questionAnswer.answerText\" />\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button (click)=\"onNoClick()\">Cancelar</button>\r\n      <button mat-button [mat-dialog-close]=\"questionAnswer.answerText\" cdkFocusInitial>\r\n        Responder\r\n      </button>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/question/answerQuestionDialog/answerDefinitionDialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/question/answerQuestionDialog/answerDefinitionDialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AnswerDefinitionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerDefinitionDialogComponent", function() { return AnswerDefinitionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _definitionQuestion_definitionQuestion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../definitionQuestion/definitionQuestion.service */ "./src/app/question/definitionQuestion/definitionQuestion.service.ts");







var AnswerDefinitionDialogComponent = /** @class */ (function () {
    function AnswerDefinitionDialogComponent(router, unitService, definitionQuestionService, loginService, activatedRoute, dialogRef, data) {
        this.router = router;
        this.unitService = unitService;
        this.definitionQuestionService = definitionQuestionService;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AnswerDefinitionDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionAnswer = { answerText: '' };
        this.activatedRoute.params.subscribe(function (params) {
            _this.unitId = params.unitId;
            _this.definitionQuestionService.getUserAnswers(_this.data.question.id, _this.loginService.getCurrentUser().id).subscribe(function (data) {
                _this.definitionAnswers = data;
            });
        });
    };
    AnswerDefinitionDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AnswerDefinitionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./answerDefinitionDialog.component.html */ "./src/app/question/answerQuestionDialog/answerDefinitionDialog.component.html"),
            styles: [__webpack_require__(/*! ../question.component.css */ "./src/app/question/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _unit_unit_service__WEBPACK_IMPORTED_MODULE_5__["UnitService"],
            _definitionQuestion_definitionQuestion_service__WEBPACK_IMPORTED_MODULE_6__["DefinitionQuestionService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AnswerDefinitionDialogComponent);
    return AnswerDefinitionDialogComponent;
}());



/***/ }),

/***/ "./src/app/question/definitionQuestion/definitionQuestion.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/question/definitionQuestion/definitionQuestion.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n<div align=center>\r\n  <p>{{question?.questionText}}</p>\r\n  <span *ngIf=\"!questionDone\">\r\n    <form #textForm=\"ngForm\">\r\n      <input placeholder=\"Texto\" [(ngModel)]=\"questionAnswer.answerText\" name=\"answer\" required>\r\n    </form>\r\n    <div *ngIf=\"!loginService.isAdmin\">\r\n      <button class=\"button\" color=\"primary\" (click)=\"sendAnswer()\">Guardar</button>\r\n    </div>\r\n  </span>\r\n  <span *ngIf=\"questionDone\">\r\n    <p>A LA ESPERA DE CORRECCIÓN</p>\r\n  </span>\r\n  <mat-button-toggle (click)=\"return()\" style=\"margin-top: 5%\">Volver</mat-button-toggle>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/question/definitionQuestion/definitionQuestion.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/question/definitionQuestion/definitionQuestion.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DefinitionQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionQuestionComponent", function() { return DefinitionQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _definitionQuestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definitionQuestion.service */ "./src/app/question/definitionQuestion/definitionQuestion.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");





var DefinitionQuestionComponent = /** @class */ (function () {
    function DefinitionQuestionComponent(router, questionService, loginService, activatedRoute) {
        this.router = router;
        this.questionService = questionService;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.questionDone = false;
    }
    DefinitionQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionAnswer = { answerText: '' };
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.questionId;
            _this.itineraryId = params.itineraryId;
            _this.unitId = params.unitId;
            _this.questionService.getDefinitionQuestion(_this.id).subscribe(function (data) {
                _this.question = data;
                _this.subtype = data.subtype;
            }, function (error) {
            });
            console.log(_this.loginService.getCurrentUser());
            _this.questionService.getUserAnswers(_this.id, _this.loginService.getCurrentUser().id).subscribe(function (data) {
                if (data.length != 0) {
                    _this.questionDone = true;
                }
            });
        });
    };
    DefinitionQuestionComponent.prototype.sendAnswer = function () {
        var _this = this;
        this.questionAnswer.user = this.loginService.getCurrentUser();
        this.questionAnswer.unitId = this.unitId;
        this.questionService.addDefinitionAnswer(this.id, this.questionAnswer).subscribe(function (_) {
            _this.questionDone = true;
        }, function (error) { return console.log(error); });
    };
    DefinitionQuestionComponent.prototype.return = function () {
        this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId]);
    };
    DefinitionQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./definitionQuestion.component.html */ "./src/app/question/definitionQuestion/definitionQuestion.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _definitionQuestion_service__WEBPACK_IMPORTED_MODULE_3__["DefinitionQuestionService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DefinitionQuestionComponent);
    return DefinitionQuestionComponent;
}());



/***/ }),

/***/ "./src/app/question/definitionQuestion/definitionQuestion.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/question/definitionQuestion/definitionQuestion.service.ts ***!
  \***************************************************************************/
/*! exports provided: DefinitionQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionQuestionService", function() { return DefinitionQuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DefinitionQuestionService = /** @class */ (function () {
    function DefinitionQuestionService(http) {
        this.http = http;
    }
    DefinitionQuestionService.prototype.getDefinitionQuestion = function (id) {
        return this.http.get('api/definition/' + id);
    };
    DefinitionQuestionService.prototype.addDefinitionQuestion = function (question) {
        var body = JSON.stringify(question);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/definition/', body, { headers: headers });
    };
    DefinitionQuestionService.prototype.addDefinitionAnswer = function (id, answer) {
        var body = JSON.stringify(answer);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/definition/' + id, body, { headers: headers });
    };
    DefinitionQuestionService.prototype.getUserAnswers = function (questionId, userId) {
        return this.http.get('api/definition/' + questionId + '/answer/user/' + userId);
    };
    DefinitionQuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefinitionQuestionService);
    return DefinitionQuestionService;
}());



/***/ }),

/***/ "./src/app/question/listQuestion/listQuestion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/question/listQuestion/listQuestion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<body>\r\n  <div align=\"center\">\r\n    <p>{{question?.questionText}}</p>\r\n    <span *ngIf=\"!alreadyDone\">\r\n      <span *ngIf=\"!questionDone\">\r\n        <form name=\"possibleListAnswers\">\r\n          <p>RESPUESTAS POSIBLES</p>\r\n          <span *ngFor=\"let answer of availableListAnswers\">\r\n            <input type=\"button\" name=\"answer\" value=\"{{answer}}\" (click)=\"newChoosenAnswer(answer)\">\r\n          </span>\r\n        </form>\r\n        <form name=\"choosenListAnswers\">\r\n          <p>RESPUESTAS ESCOGIDAS</p>\r\n          <span *ngFor=\"let answer of choosenListAnswers\">\r\n            <input type=\"button\" name=\"answer\" value=\"{{answer}}\" (click)=\"deleteChoosenAnswer(answer)\">\r\n          </span>\r\n        </form>\r\n        <div *ngIf=\"!loginService.isAdmin\">\r\n          <button class=\"button\" style=\"color: dodgerblue\" (click)=\"correctListAnswer()\">Enviar</button>\r\n        </div>\r\n      </span>\r\n\r\n      <span *ngIf=\"questionDone\">\r\n        <span *ngIf=\"questionListCorrect\">\r\n          <p>{{question.correctAnswers}}</p>\r\n          <p style=\"color: green\"> RESPUESTA CORRECTA</p>\r\n        </span>\r\n        <span *ngIf=\"!questionListCorrect\">\r\n          <p style=\"color: red\"> RESPUESTA INCORRECTA</p>\r\n          <mat-button-toggle (click)=\"this.questionDone=false\">Volver a intentar</mat-button-toggle>\r\n        </span>\r\n      </span>\r\n    </span>\r\n\r\n    <span *ngIf=\"alreadyDone\">\r\n      <span *ngIf=\"this.questionListCorrect\">\r\n      <p>{{question.correctAnswers}}</p>\r\n      <p style=\"color: green\"> RESPUESTA CORRECTA</p>\r\n    </span>\r\n    <span *ngIf=\"!this.questionListCorrect\">\r\n      <p style=\"color: red\"> RESPUESTA INCORRECTA</p>\r\n      <mat-button-toggle (click)=\"this.questionDone=false ; this.alreadyDone = false\">Volver a intentar</mat-button-toggle>\r\n    </span>\r\n    </span>\r\n\r\n    <mat-button-toggle (click)=\"return()\" style=\"margin-top: 5%\">Volver</mat-button-toggle>\r\n  </div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/question/listQuestion/listQuestion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/question/listQuestion/listQuestion.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuestionComponent", function() { return ListQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _listQuestion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listQuestion.service */ "./src/app/question/listQuestion/listQuestion.service.ts");





var ListQuestionComponent = /** @class */ (function () {
    function ListQuestionComponent(questionService, activatedRoute, loginService, router) {
        this.questionService = questionService;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.router = router;
        this.questionDone = false;
        this.choosenListAnswers = [];
    }
    ListQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.questionId;
            _this.itineraryId = params.itineraryId;
            _this.unitId = params.unitId;
            _this.questionService.getListQuestion(_this.id).subscribe(function (data) {
                _this.question = data;
                _this.availableListAnswers = _this.question.possibleAnswers;
                _this.questionListCorrectAnswers = _this.question.correctAnswers;
            }, function (error) {
            });
        });
        this.questionService.getUserAnswers(this.id, this.loginService.getCurrentUser().id).subscribe(function (data) {
            if (data.length != 0) {
                _this.alreadyDone = true;
                console.log(data);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var answer = data_1[_i];
                    if (answer[1] === true) {
                        _this.questionListCorrect = true;
                        break;
                    }
                }
            }
        });
    };
    ListQuestionComponent.prototype.newChoosenAnswer = function (answer) {
        this.choosenListAnswers.push(answer);
        this.availableListAnswers.splice(this.availableListAnswers.indexOf(answer), 1);
    };
    ListQuestionComponent.prototype.deleteChoosenAnswer = function (answer) {
        this.availableListAnswers.push(answer);
        this.choosenListAnswers.splice(this.choosenListAnswers.indexOf(answer), 1);
    };
    ListQuestionComponent.prototype.correctListAnswer = function () {
        var _this = this;
        if (this.choosenListAnswers.length === this.questionListCorrectAnswers.length) {
            this.questionListCorrect = true;
            for (var i = 0; i < this.questionListCorrectAnswers.length; i++) {
                if (!this.choosenListAnswers.includes(this.questionListCorrectAnswers[i])) {
                    this.questionListCorrect = false;
                    break;
                }
            }
        }
        else {
            this.questionListCorrect = false;
        }
        this.questionAnswer = { user: this.loginService.getCurrentUser(), correct: this.questionListCorrect, unitId: this.unitId };
        this.questionService.addAnswer(this.id, this.questionAnswer).subscribe(function (_) {
            _this.questionDone = true;
        }, function (error) { return console.log(error); });
    };
    ListQuestionComponent.prototype.return = function () {
        this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId]);
    };
    ListQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./listQuestion.component.html */ "./src/app/question/listQuestion/listQuestion.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listQuestion_service__WEBPACK_IMPORTED_MODULE_4__["ListQuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListQuestionComponent);
    return ListQuestionComponent;
}());



/***/ }),

/***/ "./src/app/question/listQuestion/listQuestion.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/question/listQuestion/listQuestion.service.ts ***!
  \***************************************************************/
/*! exports provided: ListQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuestionService", function() { return ListQuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ListQuestionService = /** @class */ (function () {
    function ListQuestionService(http) {
        this.http = http;
    }
    ListQuestionService.prototype.getListQuestion = function (id) {
        return this.http.get('api/list/' + id);
    };
    ListQuestionService.prototype.addListQuestion = function (listQuestion) {
        var body = JSON.stringify(listQuestion);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/list/', body, { headers: headers });
    };
    ListQuestionService.prototype.addAnswer = function (id, listAnswer) {
        var body = JSON.stringify(listAnswer);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('api/list/' + id, body, { headers: headers });
    };
    ListQuestionService.prototype.getUserAnswers = function (questionId, userId) {
        return this.http.get('api/list/' + questionId + '/answer/user/' + userId);
    };
    ListQuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ListQuestionService);
    return ListQuestionService;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#image-container {\r\n  width: 10rem;\r\n  display: flex;\r\n  float: right;\r\n}\r\n\r\n.question-header {\r\n  height: 3rem;\r\n  background-color: #5382ce;\r\n  color: white;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.new-question-button {\r\n  position: fixed;\r\n  color: white;\r\n  background-color: #7d3c90;\r\n  top: 3.45rem;\r\n  z-index: 501;\r\n  right: 1rem;\r\n}\r\n\r\n#spinner-container {\r\n  position: fixed;\r\n  width: calc(100% - 30rem);\r\n  right: 8rem;\r\n  top: 3.6rem;\r\n  z-index: 9999;\r\n  text-align: center;\r\n}\r\n\r\n#spinner {\r\n  display: inline;\r\n  z-index: 10000;\r\n  height: 1.8rem;\r\n  width: 1.8rem;\r\n}\r\n\r\n#spinner-text {\r\n  position: fixed;\r\n  display: inline;\r\n  z-index: 10000;\r\n  color: #ffffff;\r\n  margin: 0.35rem 0.5rem 0.35rem 0.5rem;\r\n}\r\n\r\n.tool:hover {\r\n  background-color: #a769b8;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.questions-group {\r\n  margin-right: 10%;\r\n  margin-left: 10%;\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.questions-card {\r\n  margin-right: 10%;\r\n  margin-left: 10%;\r\n  margin-top: 5%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.add-question-card {\r\n  margin-right: 10%;\r\n  margin-left: 10%;\r\n  margin-top: 2%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.card-title {\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.card-content {\r\n  text-align: center;\r\n  align-content: center;\r\n}\r\n\r\n.button-row button,\r\n.button-row a {\r\n  margin: 8px;\r\n}\r\n\r\n.question-button {\r\n  background-color: #7d3c90;\r\n  color: #ffffff;\r\n}\r\n\r\n.active-type {\r\n  background-color: #a769b8;\r\n}\r\n\r\n.add-question-form {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.add-question-form-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.add-answer-button {\r\n  margin: 10px;\r\n  background-color: #7d3c90;\r\n  color: #ffffff;\r\n}\r\n\r\n.add-answer-list {\r\n  text-align: center;\r\n}\r\n\r\n.delete-icon {\r\n  color: indianred;\r\n}\r\n\r\n.edit-icon {\r\n  color: darkorange;\r\n}\r\n\r\n.text-secondary {\r\n  color: gray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2UtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1oZWFkZXIge1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM4MmNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLm5ldy1xdWVzdGlvbi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkM2M5MDtcclxuICB0b3A6IDMuNDVyZW07XHJcbiAgei1pbmRleDogNTAxO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4jc3Bpbm5lci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzByZW0pO1xyXG4gIHJpZ2h0OiA4cmVtO1xyXG4gIHRvcDogMy42cmVtO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIGhlaWdodDogMS44cmVtO1xyXG4gIHdpZHRoOiAxLjhyZW07XHJcbn1cclxuXHJcbiNzcGlubmVyLXRleHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiAwLjM1cmVtIDAuNXJlbSAwLjM1cmVtIDAuNXJlbTtcclxufVxyXG5cclxuLnRvb2w6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzY5Yjg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnF1ZXN0aW9ucy1ncm91cCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnF1ZXN0aW9ucy1jYXJkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uYWRkLXF1ZXN0aW9uLWNhcmQge1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbixcclxuLmJ1dHRvbi1yb3cgYSB7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDNjOTA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5hY3RpdmUtdHlwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3NjliODtcclxufVxyXG5cclxuLmFkZC1xdWVzdGlvbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkLXF1ZXN0aW9uLWZvcm0tbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYWRkLWFuc3dlci1idXR0b24ge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QzYzkwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYWRkLWFuc3dlci1saXN0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGUtaWNvbiB7XHJcbiAgY29sb3I6IGluZGlhbnJlZDtcclxufVxyXG5cclxuLmVkaXQtaWNvbiB7XHJcbiAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbn1cclxuXHJcbi50ZXh0LXNlY29uZGFyeSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <!-- ADMIN -->\r\n  <body *ngIf=\"loginService.isAdmin\">\r\n\r\n    <button mat-button class=\"tool new-question-button\" (click)=\"openAddQuestionDialog()\">\r\n      <mat-icon>add</mat-icon>\r\n      Nuevo ejercicio\r\n    </button>\r\n\r\n    <div id=\"spinner-container\" *ngIf=\"showSpinner\">\r\n      <img id=\"spinner\" src=\"../../assets/img/spinner.gif\">\r\n      <span id=\"spinner-text\">Cargando...</span>\r\n    </div>\r\n\r\n    <!-- QUESTION TABLE -->\r\n    <mat-card class=\"questions-card\">\r\n      <mat-card-title class=\"card-title\">Preguntas</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-form-field>\r\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\r\n        </mat-form-field>\r\n\r\n        <table mat-table *ngIf=\"questions.length > 0\" [dataSource]=\"dataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"question\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Pregunta </th>\r\n            <td mat-cell *matCellDef=\"let question\"> {{question.questionText}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"subtype\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Tipo </th>\r\n            <td mat-cell *matCellDef=\"let question\"> {{questionTypes.get(question.subtype)}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"edit\">\r\n            <th mat-header-cell *matHeaderCellDef> Editar </th>\r\n            <td mat-cell *matCellDef=\"let question\">\r\n              <button mat-button (click)=\"editQuestion(question.id, question.subtype)\">\r\n                <mat-icon class=\"edit-icon\">create</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"delete\">\r\n            <th mat-header-cell *matHeaderCellDef> Borrar </th>\r\n            <td mat-cell *matCellDef=\"let question\">\r\n              <button mat-button (click)=\"deleteQuestion(question.id)\">\r\n                <mat-icon class=\"delete-icon\">delete_outline</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n\r\n        <p *ngIf=\"questions.length == 0 && !showSpinner\" matLine class=\"text-secondary card-content\">No hay preguntas en esta unidad</p>\r\n\r\n        <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 100]\" showFirstLastButtons></mat-paginator>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n    <!-- QUESTION LIST -->\r\n    <!--<mat-card class=\"questions-card\">\r\n      <mat-card-title class=\"card-title\">Preguntas</mat-card-title>\r\n      <mat-card-content class=\"card-content\">\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let question of questions\">\r\n            <p matLine>\r\n              {{ question.questionText }}\r\n              <button mat-button (click)=\"deleteQuestion(question.id)\">\r\n                <mat-icon class=\"delete-icon\">delete_outline</mat-icon>\r\n              </button>\r\n            </p>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-card-content>\r\n    </mat-card>-->\r\n  </body>\r\n\r\n  <!-- NOT ADMIN -->\r\n  <body *ngIf=\"!loginService.isAdmin\">\r\n\r\n    <mat-card class=\"questions-card\">\r\n      <mat-card-title class=\"card-title\">Preguntas de definición</mat-card-title>\r\n      <mat-card-content class=\"card-content\">\r\n        <div *ngFor=\"let question of definitionQuestions\">\r\n          <mat-button-toggle (click)=\"openAnswerDialog(question)\">\r\n            <h3>{{ question.questionText }}</h3>\r\n          </mat-button-toggle>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"questions-card\">\r\n      <mat-card-title class=\"card-title\">Preguntas de listado</mat-card-title>\r\n      <mat-card-content class=\"card-content\">\r\n        <div *ngFor=\"let question of listQuestions\">\r\n          {{ question.questionText }}\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"questions-card\">\r\n      <mat-card-title class=\"card-title\">Preguntas de test</mat-card-title>\r\n      <mat-card-content class=\"card-content\">\r\n        <div *ngFor=\"let question of testQuestions\">\r\n          {{ question.questionText }}\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question.service */ "./src/app/question/question.service.ts");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _answerQuestionDialog_answerDefinitionDialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./answerQuestionDialog/answerDefinitionDialog.component */ "./src/app/question/answerQuestionDialog/answerDefinitionDialog.component.ts");
/* harmony import */ var _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirmAction/confirm-action.component */ "./src/app/confirmAction/confirm-action.component.ts");
/* harmony import */ var _addQuestionDialog_addQuestionDialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addQuestionDialog/addQuestionDialog.component */ "./src/app/question/addQuestionDialog/addQuestionDialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var QUESTION_TYPES = [
    { id: 'DefinitionQuestion', name: 'Definición' },
    { id: 'ListQuestion', name: 'Listado' },
    { id: 'TestQuestion', name: 'Test' },
];
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(loginService, dialog, questionService, activatedRoute, router) {
        this.loginService = loginService;
        this.dialog = dialog;
        this.questionService = questionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.displayedColumns = ['question', 'subtype', 'edit', 'delete'];
        this.showSpinner = false;
        this.confirmDialog = {
            text: 'Se eliminará el ejercicio permanentemente',
            button1: 'Cancelar',
            button2: 'Borrar'
        };
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSpinner = true;
        this.questions = [];
        this.questionTypes = new Map();
        for (var _i = 0, QUESTION_TYPES_1 = QUESTION_TYPES; _i < QUESTION_TYPES_1.length; _i++) {
            var entry = QUESTION_TYPES_1[_i];
            this.questionTypes.set(entry.id, entry.name);
        }
        this.answerInput = '';
        this.activatedRoute.params.subscribe(function (params) {
            _this.unitId = params.unitId;
        });
        // init data source
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"]();
        this.getQuestions();
        // this.getAllQuestions();
    };
    QuestionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    QuestionComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getUnitQuestions(this.unitId).subscribe(function (data) {
            _this.questions = data;
            _this.dataSource.data = data;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.showSpinner = false;
        });
    };
    // Get questions type by type
    QuestionComponent.prototype.getAllQuestions = function () {
        var _this = this;
        this.questionService.getUnitDefinitionQuestions(this.unitId).subscribe(function (data) {
            _this.definitionQuestions = data;
            _this.questions = _this.questions.concat(data);
            // question table
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.questions);
            _this.dataSource.sort = _this.sort;
            _this.showSpinner = false;
        });
        this.questionService.getUnitListQuestions(this.unitId).subscribe(function (data) {
            _this.listQuestions = data;
            _this.questions = _this.questions.concat(data);
            // question table
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.questions);
            _this.dataSource.sort = _this.sort;
            _this.showSpinner = false;
        });
        this.questionService.getUnitTestQuestions(this.unitId).subscribe(function (data) {
            _this.testQuestions = data;
            _this.questions = _this.questions.concat(data);
            // question table
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.questions);
            _this.dataSource.sort = _this.sort;
            _this.showSpinner = false;
        });
    };
    QuestionComponent.prototype.editQuestion = function (questionID, subtype) {
        switch (subtype) {
            case 'DefinitionQuestion': {
                this.getDefinitionQuestion(questionID);
                break;
            }
            case 'ListQuestion': {
                this.getListQuestion(questionID);
                break;
            }
            case 'TestQuestion': {
                this.getTestQuestion(questionID);
                break;
            }
            default: {
                console.log('Not valid');
                break;
            }
        }
    };
    QuestionComponent.prototype.getDefinitionQuestion = function (questionID) {
        var _this = this;
        this.questionService.getUnitDefinitionQuestion(this.unitId, questionID).subscribe(function (data) {
            _this.openEditQuestionDialog(data);
        });
    };
    QuestionComponent.prototype.getListQuestion = function (questionID) {
        var _this = this;
        this.questionService.getUnitListQuestion(this.unitId, questionID).subscribe(function (data) {
            _this.openEditQuestionDialog(data);
        });
    };
    QuestionComponent.prototype.getTestQuestion = function (questionID) {
        var _this = this;
        this.questionService.getUnitTestQuestion(this.unitId, questionID).subscribe(function (data) {
            _this.openEditQuestionDialog(data);
        });
    };
    QuestionComponent.prototype.deleteQuestion = function (questionID) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmActionComponent"], {
            data: { confirmText: this.confirmDialog.text, button1: this.confirmDialog.button1, button2: this.confirmDialog.button2 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.questionService.deleteUnitQuestion(_this.unitId, questionID).subscribe(function (_) {
                    // TODO Remove it
                    _this.ngOnInit();
                }, function (error) {
                    console.log(error);
                    _this.ngOnInit();
                });
            }
        });
    };
    QuestionComponent.prototype.sendDefinitionAnswer = function (questionID) {
        var _this = this;
        if (this.answerInput === '') {
            // TODO
            console.log('error: inputs cannot be empty');
            return;
        }
        var answer = {
            answerText: this.answerInput,
            user: this.loginService.getCurrentUser(),
            unitId: this.unitId
        };
        this.questionService.addUnitDefinitionAnswer(this.unitId, questionID, answer).subscribe(function (_) {
            // TODO Remove it
            _this.ngOnInit();
        }, function (error) {
            console.log(error);
            _this.ngOnInit();
        });
    };
    QuestionComponent.prototype.openEditQuestionDialog = function (editingQuestion) {
        var _this = this;
        var dialogRef = this.dialog.open(_addQuestionDialog_addQuestionDialog_component__WEBPACK_IMPORTED_MODULE_8__["AddQuestionDialogComponent"], {
            width: '600px',
            data: { isEditing: true, unitId: this.unitId, question: editingQuestion }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.ngOnInit();
            }
        });
    };
    QuestionComponent.prototype.openAddQuestionDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_addQuestionDialog_addQuestionDialog_component__WEBPACK_IMPORTED_MODULE_8__["AddQuestionDialogComponent"], {
            width: '600px',
            data: { isEditing: false, unitId: this.unitId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.ngOnInit();
            }
        });
    };
    QuestionComponent.prototype.openAnswerDialog = function (q) {
        var _this = this;
        var dialogRef = this.dialog.open(_answerQuestionDialog_answerDefinitionDialog_component__WEBPACK_IMPORTED_MODULE_6__["AnswerDefinitionDialogComponent"], {
            width: '250px',
            data: { question: q, answerInput: this.answerInput }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.answerInput = result;
            if ((typeof _this.answerInput !== 'undefined') && (_this.answerInput !== '')) {
                _this.sendDefinitionAnswer(q.id);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSort"])
    ], QuestionComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"])
    ], QuestionComponent.prototype, "paginator", void 0);
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/question/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/question/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.baseUrl = '/api/units/';
    }
    QuestionService.prototype.getUnitQuestions = function (id) {
        return this.http.get(this.baseUrl + id + '/question');
    };
    QuestionService.prototype.getUnitDefinitionQuestions = function (id) {
        return this.http.get(this.baseUrl + id + '/question/definition');
    };
    QuestionService.prototype.getUnitDefinitionQuestion = function (unitId, questionId) {
        return this.http.get(this.baseUrl + unitId + '/question/definition/' + questionId);
    };
    QuestionService.prototype.getUnitListQuestions = function (id) {
        return this.http.get(this.baseUrl + id + '/question/list');
    };
    QuestionService.prototype.getUnitListQuestion = function (unitId, questionId) {
        return this.http.get(this.baseUrl + unitId + '/question/list/' + questionId);
    };
    QuestionService.prototype.getUnitTestQuestions = function (id) {
        return this.http.get(this.baseUrl + id + '/question/test');
    };
    QuestionService.prototype.getUnitTestQuestion = function (unitId, questionId) {
        return this.http.get(this.baseUrl + unitId + '/question/test/' + questionId);
    };
    QuestionService.prototype.addUnitDefinitionQuestion = function (id, question) {
        var body = JSON.stringify(question);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.baseUrl + id + '/question/definition', body, { headers: headers });
    };
    QuestionService.prototype.editUnitDefinitionQuestion = function (unitId, questionId, question) {
        var body = JSON.stringify(question);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.baseUrl + unitId + '/question/definition/' + questionId, body, { headers: headers });
    };
    QuestionService.prototype.addUnitListQuestion = function (id, question) {
        var body = JSON.stringify(question);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.baseUrl + id + '/question/list', body, { headers: headers });
    };
    QuestionService.prototype.editUnitListQuestion = function (unitId, questionId, question) {
        var body = JSON.stringify(question);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.baseUrl + unitId + '/question/list/' + questionId, body, { headers: headers });
    };
    QuestionService.prototype.addUnitTestQuestion = function (id, question) {
        var body = JSON.stringify(question);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.baseUrl + id + '/question/test', body, { headers: headers });
    };
    QuestionService.prototype.editUnitTestQuestion = function (unitId, questionId, question) {
        var body = JSON.stringify(question);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.baseUrl + unitId + '/question/test/' + questionId, body, { headers: headers });
    };
    QuestionService.prototype.deleteUnitQuestion = function (unitID, questionID) {
        return this.http.delete(this.baseUrl + unitID + '/question/' + questionID);
    };
    QuestionService.prototype.addUnitDefinitionAnswer = function (unitID, questionID, answer) {
        var body = JSON.stringify(answer);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.baseUrl + unitID + '/question/definition/' + questionID + '/answer', body, { headers: headers });
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/question/testQuestion/testQuestion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/question/testQuestion/testQuestion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n<div align=center>\r\n  <p>{{question?.questionText}}</p>\r\n    <span *ngIf=\"!questionDone\">\r\n      <form name=\"choosenAnswer\">\r\n        <span *ngFor=\"let answer of question?.possibleAnswers\">\r\n          <label>\r\n            <input type=\"radio\" name=\"answer\" value=\"{{answer}}\" [(ngModel)]=\"this.chosenAnswer\"> {{answer}}\r\n          </label>\r\n        </span>\r\n      </form>\r\n      <div *ngIf=\"!loginService.isAdmin\">\r\n        <button class=\"button\" color=\"primary\" (click)=\"correctType1Answer()\">Guardar</button>\r\n      </div>\r\n    </span>\r\n    <span *ngIf=\"questionDone\">\r\n      <span *ngIf=\"correct\">\r\n        <p>{{question.correctAnswer}}</p>\r\n        <p style=\"color: green\"> RESPUESTA CORRECTA</p>\r\n      </span>\r\n      <span *ngIf=\"!correct\">\r\n        <p style=\"color: red\"> RESPUESTA INCORRECTA</p>\r\n        <mat-button-toggle (click)=\"this.questionDone=false\">Volver a intentar</mat-button-toggle>\r\n      </span>\r\n    </span>\r\n  <mat-button-toggle (click)=\"return()\" style=\"margin-top: 5%\">Volver</mat-button-toggle>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/question/testQuestion/testQuestion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/question/testQuestion/testQuestion.component.ts ***!
  \*****************************************************************/
/*! exports provided: TestQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestQuestionComponent", function() { return TestQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/login.service */ "./src/app/auth/login.service.ts");
/* harmony import */ var _testQuestion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testQuestion.service */ "./src/app/question/testQuestion/testQuestion.service.ts");





var TestQuestionComponent = /** @class */ (function () {
    function TestQuestionComponent(router, questionService, loginService, activatedRoute) {
        this.router = router;
        this.questionService = questionService;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.questionDone = false;
        this.alreadyDone = false;
        this.correct = false;
    }
    TestQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionAnswer = { answerText: '' };
        this.questionAnswer = { answerText: '' };
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.questionId;
            _this.itineraryId = params.itineraryId;
            _this.unitId = params.unitId;
            _this.questionService.getTestQuestion(_this.id).subscribe(function (data) {
                _this.question = data;
                _this.subtype = data.subtype;
            }, function (error) {
            });
            _this.questionService.getUserAnswers(_this.id, _this.loginService.getCurrentUser().id).subscribe(function (data) {
                if (data.length != 0) {
                    _this.alreadyDone = true;
                    console.log(data);
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var answer = data_1[_i];
                        if (answer[2] === true) {
                            _this.correct = true;
                            break;
                        }
                    }
                }
            });
        });
    };
    TestQuestionComponent.prototype.correctType1Answer = function () {
        var _this = this;
        if (this.chosenAnswer === this.question.correctAnswer) {
            this.correct = true;
        }
        else {
            this.correct = false;
        }
        this.questionAnswer = { user: this.loginService.getCurrentUser(), correct: this.correct, answerText: this.chosenAnswer, unitId: this.unitId };
        console.log(this.questionAnswer);
        this.questionService.addTestAnswer(this.id, this.questionAnswer).subscribe(function (_) {
            _this.questionDone = true;
        }, function (error) { return console.log(error); });
    };
    TestQuestionComponent.prototype.return = function () {
        this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId]);
    };
    TestQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./testQuestion.component.html */ "./src/app/question/testQuestion/testQuestion.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _testQuestion_service__WEBPACK_IMPORTED_MODULE_4__["TestQuestionService"],
            _auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TestQuestionComponent);
    return TestQuestionComponent;
}());



/***/ }),

/***/ "./src/app/question/testQuestion/testQuestion.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/question/testQuestion/testQuestion.service.ts ***!
  \***************************************************************/
/*! exports provided: TestQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestQuestionService", function() { return TestQuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TestQuestionService = /** @class */ (function () {
    function TestQuestionService(http) {
        this.http = http;
    }
    TestQuestionService.prototype.getTestQuestion = function (id) {
        return this.http.get('api/test/' + id);
    };
    TestQuestionService.prototype.addTestQuestion = function (testQuestion) {
        var body = JSON.stringify(testQuestion);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/test/', body, { headers: headers });
    };
    TestQuestionService.prototype.addTestAnswer = function (id, answer) {
        var body = JSON.stringify(answer);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post('/api/test/' + id, body, { headers: headers });
    };
    TestQuestionService.prototype.getUserAnswers = function (questionId, userId) {
        return this.http.get('api/test/' + questionId + '/answer/user/' + userId);
    };
    TestQuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestQuestionService);
    return TestQuestionService;
}());



/***/ }),

/***/ "./src/app/relation/relation.type.ts":
/*!*******************************************!*\
  !*** ./src/app/relation/relation.type.ts ***!
  \*******************************************/
/*! exports provided: RelationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationType", function() { return RelationType; });
var RelationType;
(function (RelationType) {
    RelationType["ASSOCIATION"] = "ASSOCIATION";
    RelationType["AGGREGATION"] = "AGGREGATION";
    RelationType["COMPOSITION"] = "COMPOSITION";
    RelationType["INHERITANCE"] = "INHERITANCE";
    RelationType["USE"] = "USE";
})(RelationType || (RelationType = {}));
;


/***/ }),

/***/ "./src/app/slide/slide.service.ts":
/*!****************************************!*\
  !*** ./src/app/slide/slide.service.ts ***!
  \****************************************/
/*! exports provided: SlideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideService", function() { return SlideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SlideService = /** @class */ (function () {
    function SlideService(http) {
        this.http = http;
    }
    SlideService.prototype.getSlides = function () {
        return this.http.get('/api/slides/');
    };
    SlideService.prototype.getSlide = function (id) {
        return this.http.get('/api/slides/' + id);
    };
    SlideService.prototype.deleteSlide = function (slide) {
        return this.http.delete('/api/slides/' + slide.id);
    };
    SlideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SlideService);
    return SlideService;
}());



/***/ }),

/***/ "./src/app/tab/tab.service.ts":
/*!************************************!*\
  !*** ./src/app/tab/tab.service.ts ***!
  \************************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return TabService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/login.service */ "./src/app/auth/login.service.ts");



var TabService = /** @class */ (function () {
    function TabService(loginService) {
        this.loginService = loginService;
        this.units = false;
        this.unit = '';
        this.courses = false;
        this.course = '';
        this.lessons = false;
        this.lesson = '';
        this.modules = false;
        this.module = '';
    }
    TabService.prototype.emptyAll = function () {
        this.units = false;
        this.unit = '';
        this.courses = false;
        this.course = '';
        this.lessons = false;
        this.lesson = '';
        this.modules = false;
        this.module = '';
    };
    TabService.prototype.setHome = function () {
        this.emptyAll();
    };
    TabService.prototype.setUnits = function () {
        this.emptyAll();
        this.units = true;
    };
    TabService.prototype.setUnit = function (unitName, unitId) {
        this.emptyAll();
        this.units = true;
        this.unit = unitName;
        this.unitId = unitId;
    };
    TabService.prototype.setCourses = function () {
        this.emptyAll();
        this.courses = true;
    };
    TabService.prototype.setCourse = function (courseName, courseId) {
        this.emptyAll();
        this.courses = true;
        this.course = courseName;
        this.courseId = courseId;
    };
    TabService.prototype.setLesson = function (unitName, unitId, lessonName) {
        this.emptyAll();
        this.units = true;
        this.unit = unitName;
        this.unitId = unitId;
        this.lessons = true;
        this.lesson = lessonName;
    };
    TabService.prototype.setLessonInModule = function (name, id, moduleName, moduleId, lessonName) {
        this.emptyAll();
        if (this.loginService.isAdmin) {
            this.units = true;
            this.unit = name;
            this.unitId = id;
        }
        else {
            this.courses = true;
            this.course = name;
            this.courseId = id;
        }
        this.module = moduleName;
        this.moduleId = moduleId;
        this.lessons = true;
        this.lesson = lessonName;
    };
    TabService.prototype.setUnitModule = function (name, unitId, moduleName, moduleId) {
        this.emptyAll();
        this.units = true;
        this.unit = name;
        this.unitId = unitId;
        this.modules = true;
        this.module = moduleName;
        this.moduleId = moduleId;
    };
    TabService.prototype.setCourseModule = function (moduleId, courseId, name) {
        this.emptyAll();
        this.moduleId = moduleId;
        this.courseId = courseId;
        this.courses = true;
        this.course = name;
    };
    TabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], TabService);
    return TabService;
}());



/***/ }),

/***/ "./src/app/unit/unit.component.css":
/*!*****************************************!*\
  !*** ./src/app/unit/unit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n::ng-deep .mat-focused .mat-form-field-label {\r\n  /*change color of label*/\r\n  color: #1e042f !important;\r\n}\r\n\r\n::ng-deep.mat-form-field-underline {\r\n  /*change color of underline*/\r\n  background-color: #e1afed !important;\r\n}\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n  /*change color of underline when focused*/\r\n  background-color: #9e2abb !important;\r\n}\r\n\r\ninput:invalid {\r\n  background-color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pdC91bml0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdW5pdC91bml0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICBjb2xvcjogIzFlMDQyZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWFmZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDppbnZhbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/unit/unit.component.html":
/*!******************************************!*\
  !*** ./src/app/unit/unit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n<body>\r\n\r\n  <div id=\"lateral-panel\" [ngClass]=\"showMenu ? 'left-zero' : 'hidden-menu'\">\r\n\r\n    <button [ngClass]=\"activeTab == 0 ? 'tab activeTab mat-button' : 'tab mat-button'\" (click)=\"activateTab(0)\">\r\n      <mat-icon [ngClass]=\"showMenu ? 'tab-icon' : 'tab-icon-without-menu'\">view_stream</mat-icon>\r\n      <span class=\"tab-text\" *ngIf=\"showMenu\">Fichas</span>\r\n    </button>\r\n\r\n    <button [ngClass]=\"activeTab == 1 ? 'tab activeTab mat-button' : 'tab mat-button'\" (click)=\"activateTab(1)\">\r\n      <mat-icon [ngClass]=\"showMenu ? 'tab-icon' : 'tab-icon-without-menu'\">edit</mat-icon>\r\n      <span class=\"tab-text\" *ngIf=\"showMenu\">Ejercicios</span>\r\n    </button>\r\n\r\n    <button [ngClass]=\"activeTab == 2 ? 'tab activeTab mat-button' : 'tab mat-button'\" (click)=\"activateTab(2)\">\r\n      <mat-icon [ngClass]=\"showMenu ? 'tab-icon' : 'tab-icon-without-menu'\">slideshow</mat-icon>\r\n      <span class=\"tab-text\" *ngIf=\"showMenu\">Leciones</span>\r\n    </button>\r\n\r\n    <button [ngClass]=\"activeTab == 3 ? 'tab activeTab mat-button' : 'tab mat-button'\" (click)=\"activateTab(3)\">\r\n      <mat-icon [ngClass]=\"showMenu ? 'tab-icon' : 'tab-icon-without-menu'\">vertical_split</mat-icon>\r\n      <span class=\"tab-text\" *ngIf=\"showMenu\">Módulos</span>\r\n    </button>\r\n\r\n  </div>\r\n  <mat-icon id=\"hide-menu-button\" [ngClass]=\"showMenu ? 'show-hide-menu-button' : 'hidden-hide-menu-button'\" (click)=\"setShowMenu(!showMenu)\">reorder</mat-icon>\r\n  <div id=\"top-panel\" [ngClass]=\"showMenu ? 'with-menu' : 'without-menu'\"></div>\r\n\r\n  <div id=\"unit-course-content\" [ngClass]=\"showMenu ? 'with-menu' : 'without-menu'\">\r\n    <app-cards *ngIf=\"activeTab==0\"></app-cards>\r\n    <app-questions *ngIf=\"activeTab==1\"></app-questions>\r\n    <app-lessons *ngIf=\"activeTab==2\"></app-lessons>\r\n    <app-modules *ngIf=\"activeTab==3\"></app-modules>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/unit/unit.component.ts":
/*!****************************************!*\
  !*** ./src/app/unit/unit.component.ts ***!
  \****************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab/tab.service */ "./src/app/tab/tab.service.ts");





var UnitComponent = /** @class */ (function () {
    function UnitComponent(router, activatedRoute, unitService, tabService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.unitService = unitService;
        this.tabService = tabService;
        this.activeTab = 0;
        this.showMenu = true;
    }
    UnitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var unitId = params.unitId;
            _this.unitService.getUnit(unitId).subscribe(function (data) {
                _this.tabService.setUnit(data.name, data.id);
                _this.unit = data;
            }, function (error) { console.log(error); });
        });
    };
    UnitComponent.prototype.activateTab = function (tab) {
        this.activeTab = tab;
    };
    UnitComponent.prototype.setShowMenu = function (showMenu) {
        this.showMenu = showMenu;
    };
    UnitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./unit.component.html */ "./src/app/unit/unit.component.html"),
            styles: [__webpack_require__(/*! ./unit.component.css */ "./src/app/unit/unit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"],
            _tab_tab_service__WEBPACK_IMPORTED_MODULE_4__["TabService"]])
    ], UnitComponent);
    return UnitComponent;
}());



/***/ }),

/***/ "./src/app/unit/unit.service.ts":
/*!**************************************!*\
  !*** ./src/app/unit/unit.service.ts ***!
  \**************************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UnitService = /** @class */ (function () {
    function UnitService(http) {
        this.http = http;
        this.baseUrl = '/api/units/';
    }
    UnitService.prototype.getUnits = function () {
        return this.http.get(this.baseUrl);
    };
    UnitService.prototype.getUnit = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    UnitService.prototype.searchByNameContaining = function (name) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', name);
        return this.http.get(this.baseUrl + 'search/', { params: params });
    };
    UnitService.prototype.createUnit = function (unit) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.baseUrl, unit, { headers: headers });
    };
    UnitService.prototype.saveUnits = function (units) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.baseUrl, units, { headers: headers });
    };
    UnitService.prototype.getAbsoluteName = function (id) {
        return this.http.get(this.baseUrl + id + '/absoluteName');
    };
    UnitService.prototype.getParent = function (id) {
        return this.http.get(this.baseUrl + id + '/parent');
    };
    UnitService.prototype.deleteUnit = function (id) {
        return this.http.delete(this.baseUrl + id);
    };
    UnitService.prototype.deleteRelation = function (id) {
        return this.http.delete(this.baseUrl + 'relations/' + id);
    };
    UnitService.prototype.getCard = function (cardId, unitId) {
        return this.http.get(this.baseUrl + unitId + '/cards/' + cardId);
    };
    UnitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UnitService);
    return UnitService;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#json-editor-container {\r\n  position: absolute;\r\n  width: 30%;\r\n  height: calc(100vh - 3rem);\r\n  top: 3rem;\r\n  z-index: 1000;\r\n}\r\n\r\n#search {\r\n  color: white;\r\n}\r\n\r\n#result {\r\n  border-top: 1px solid #9e2abb;\r\n  background-color: #6a3b77;\r\n}\r\n\r\n.active {\r\n  background-color: #896196 !important;\r\n}\r\n\r\nmat-label {\r\n  color: #cda3db;\r\n}\r\n\r\n#unit-representation {\r\n  float: right;\r\n  width: 70%;\r\n  overflow: auto;\r\n}\r\n\r\n#unit-prefix {\r\n  color: #b99bcd;\r\n}\r\n\r\n#unit-name {\r\n  font-weight: bold;\r\n}\r\n\r\n#uml-edit-input {\r\n  position: absolute;\r\n  z-index: 2;\r\n}\r\n\r\n#uml-edit-input {\r\n  background: transparent;\r\n  border: none;\r\n  top: 120%;\r\n}\r\n\r\n#uml-node-options {\r\n  position: absolute;\r\n  padding: 0.1rem;\r\n  background-color: #ffffff;\r\n  border: thin solid #A8A8A8;\r\n  top: 120%;\r\n  z-index: 2;\r\n  width: 8rem;\r\n}\r\n\r\n#up-button {\r\n  width: 100%;\r\n  margin-bottom: 0.2rem;\r\n  background-color: #f2f0ff;\r\n}\r\n\r\n#up-button:hover {\r\n  background-color: #e7e4fe;\r\n}\r\n\r\n.delete-button {\r\n  width: 100% !important;;\r\n  margin-top: 0.2rem !important;;\r\n  background-color: #ffdae8 !important;;\r\n}\r\n\r\n.delete-button:hover {\r\n  background-color: #ebcad7 !important;;\r\n}\r\n\r\n.button-icon {\r\n  font-size: 1rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: -0.3rem;\r\n}\r\n\r\n#uml-path-options {\r\n  position: absolute;\r\n  padding: 0.1rem;\r\n  background-color: #ffffff;\r\n  border: thin solid #A8A8A8;\r\n  z-index: 2;\r\n}\r\n\r\n.uml-option-icon {\r\n  font-size: 1rem;\r\n}\r\n\r\n.save-button {\r\n  position: fixed;\r\n  color: #896d91;\r\n  top: 3.45rem;\r\n  z-index: 501;\r\n  right: 1rem;\r\n  cursor: inherit;\r\n}\r\n\r\n.save-button-enabled {\r\n  color: white;\r\n  background-color: #7d3c90;\r\n  cursor: pointer;\r\n}\r\n\r\n.save-button-enabled:hover {\r\n  background-color: #a769b8;\r\n}\r\n\r\n#spinner-container {\r\n  position: fixed;\r\n  width: calc(100% - 30rem);\r\n  right: 8rem;\r\n  top: 3.6rem;\r\n  z-index: 9999;\r\n  text-align: center;\r\n}\r\n\r\n#spinner {\r\n  display: inline;\r\n  z-index: 10000;\r\n  height: 1.8rem;\r\n  width: 1.8rem;\r\n}\r\n\r\n#spinner-text {\r\n  position: fixed;\r\n  display: inline;\r\n  z-index: 10000;\r\n  color: #ffffff;\r\n  margin: 0.35rem 0.5rem 0.35rem 0.5rem;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-invalid .mat-input-element, .mat-warn .mat-input-element {\r\n  caret-color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-label {\r\n  color: rgba(0,0,0,.6)!important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #9e2abb !important;\r\n}\r\n\r\n#search {\r\n  width: 100%;\r\n  z-index: 120;\r\n}\r\n\r\n.uml-options-button {\r\n  border-radius: 0.2rem;\r\n  background-color: #fdf7ff;\r\n  cursor: pointer;\r\n  width: 50%;\r\n}\r\n\r\n.uml-relation-button {\r\n  width: 100% !important;\r\n}\r\n\r\n.uml-options-button:hover {\r\n  background-color: #ebe5ed;\r\n}\r\n\r\n.uml-content {\r\n  margin-top: 8rem;\r\n  position: absolute;\r\n  right: 0;\r\n  padding-bottom: 2rem;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.uml-content-with-menu {\r\n  left: 22rem;\r\n}\r\n\r\n.uml-content-without-menu {\r\n  left: 11rem;\r\n}\r\n\r\n.hidden-menu {\r\n  width: 20rem;\r\n  left: -22rem;\r\n}\r\n\r\n.hidden-hide-menu-button {\r\n  left: 0;\r\n}\r\n\r\n.without-menu {\r\n  width: 100%;\r\n}\r\n\r\n#svg {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#path {\r\n  stroke: #27273c;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjanNvbi1lZGl0b3ItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTtcclxuICB0b3A6IDNyZW07XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuI3NlYXJjaCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jcmVzdWx0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzllMmFiYjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmEzYjc3O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk2MTk2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgY29sb3I6ICNjZGEzZGI7XHJcbn1cclxuXHJcbiN1bml0LXJlcHJlc2VudGF0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI3VuaXQtcHJlZml4IHtcclxuICBjb2xvcjogI2I5OWJjZDtcclxufVxyXG5cclxuI3VuaXQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiN1bWwtZWRpdC1pbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbiN1bWwtZWRpdC1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRvcDogMTIwJTtcclxufVxyXG5cclxuI3VtbC1ub2RlLW9wdGlvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IHRoaW4gc29saWQgI0E4QThBODtcclxuICB0b3A6IDEyMCU7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogOHJlbTtcclxufVxyXG5cclxuI3VwLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYwZmY7XHJcbn1cclxuXHJcbiN1cC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U0ZmU7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OztcclxuICBtYXJnaW4tdG9wOiAwLjJyZW0gIWltcG9ydGFudDs7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGFlOCAhaW1wb3J0YW50OztcclxufVxyXG5cclxuLmRlbGV0ZS1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmNhZDcgIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi5idXR0b24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAtMC4zcmVtO1xyXG59XHJcblxyXG4jdW1sLXBhdGgtb3B0aW9ucyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjQThBOEE4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi51bWwtb3B0aW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgY29sb3I6ICM4OTZkOTE7XHJcbiAgdG9wOiAzLjQ1cmVtO1xyXG4gIHotaW5kZXg6IDUwMTtcclxuICByaWdodDogMXJlbTtcclxuICBjdXJzb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbi1lbmFibGVkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkM2M5MDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbi1lbmFibGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc2OWI4O1xyXG59XHJcblxyXG4jc3Bpbm5lci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzByZW0pO1xyXG4gIHJpZ2h0OiA4cmVtO1xyXG4gIHRvcDogMy42cmVtO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIGhlaWdodDogMS44cmVtO1xyXG4gIHdpZHRoOiAxLjhyZW07XHJcbn1cclxuXHJcbiNzcGlubmVyLXRleHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiAwLjM1cmVtIDAuNXJlbSAwLjM1cmVtIDAuNXJlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzllMmFiYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbiAgY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCwgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICM5ZTJhYmIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjYpIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjOWUyYWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEyMDtcclxufVxyXG5cclxuLnVtbC1vcHRpb25zLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGY3ZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi51bWwtcmVsYXRpb24tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udW1sLW9wdGlvbnMtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlNWVkO1xyXG59XHJcblxyXG4udW1sLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDhyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi51bWwtY29udGVudC13aXRoLW1lbnUge1xyXG4gIGxlZnQ6IDIycmVtO1xyXG59XHJcblxyXG4udW1sLWNvbnRlbnQtd2l0aG91dC1tZW51IHtcclxuICBsZWZ0OiAxMXJlbTtcclxufVxyXG5cclxuLmhpZGRlbi1tZW51IHtcclxuICB3aWR0aDogMjByZW07XHJcbiAgbGVmdDogLTIycmVtO1xyXG59XHJcblxyXG4uaGlkZGVuLWhpZGUtbWVudS1idXR0b24ge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi53aXRob3V0LW1lbnUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jc3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jcGF0aCB7XHJcbiAgc3Ryb2tlOiAjMjcyNzNjO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<html>\r\n  <body>\r\n\r\n    <div id=\"lateral-panel\" [ngClass]=\"showMenu ? 'left-zero' : 'hidden-menu'\">\r\n      <mat-form-field appearance=\"outline\" id=\"search\">\r\n        <mat-label>Buscar unidad</mat-label>\r\n        <input id=\"search-input\" matInput [(ngModel)]=\"searchField\" (ngModelChange)=\"search()\" (keydown)=\"keyDown($event)\"/>\r\n        <div id=\"result-list\" *ngIf=\"showResults\">\r\n          <div id=\"result\" *ngFor=\"let result of results; let i = index\" [class.active]=\"i==arrowKeyLocation\" (mouseover)=\"setActive(i)\">\r\n            <span id=\"unit-prefix\">{{getUnitPrefix(result.name)}}</span>\r\n            <span id=\"unit-name\">{{getUnitName(result.name)}}</span>\r\n          </div>\r\n        </div>\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-icon id=\"hide-menu-button\" [ngClass]=\"showMenu ? 'show-hide-menu-button' : 'hidden-hide-menu-button'\" (click)=\"setShowMenu(!showMenu)\">reorder</mat-icon>\r\n    <div id=\"top-panel\" [ngClass]=\"showMenu ? 'with-menu' : 'without-menu'\"></div>\r\n\r\n    <div id=\"json-editor-container\" [hidden]=\"hideJson\">\r\n      <json-editor [options]=\"editorOptions\" [(ngModel)]=\"data\"></json-editor>\r\n    </div>\r\n\r\n    <button mat-button [ngClass]=\"changed ? 'save-button save-button-enabled' : 'save-button'\" (click)=\"save(null)\">\r\n      <mat-icon>save</mat-icon>\r\n      Guardar\r\n    </button>\r\n\r\n    <div id=\"spinner-container\" *ngIf=\"showSpinner\">\r\n      <img id=\"spinner\" src=\"../../assets/img/spinner.gif\">\r\n      <span id=\"spinner-text\">Cargando...</span>\r\n    </div>\r\n\r\n    <div [ngClass]=\"showMenu ? 'uml-content uml-content-with-menu' : 'uml-content uml-content-without-menu'\" #uml></div>\r\n\r\n    <div #umlNodeOptions (window:resize)=\"updateUmlNodeOptions()\">\r\n      <input id=\"uml-edit-input\" (change)=\"updateUnitName()\">\r\n      <div id=\"uml-node-options\">\r\n\r\n        <button title=\"Cargar padre\" id=\"up-button\" class=\"uml-options-button\" [hidden]=\"disableUpButton\" (click)=\"upLevelAbove()\">\r\n          <mat-icon class=\"button-icon\">keyboard_arrow_up</mat-icon>\r\n        </button>\r\n\r\n        <button id=\"composition-incoming-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-composition-incoming.png\" height=\"15\"></button>\r\n        <button id=\"composition-outgoing-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-composition-outgoing.png\" height=\"15\"></button>\r\n        <br>\r\n        <button id=\"inheritance-incoming-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-inheritance-incoming.png\" height=\"15\"></button>\r\n        <button id=\"inheritance-outgoing-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-inheritance-outgoing.png\" height=\"15\"></button>\r\n        <br>\r\n        <button id=\"aggregation-incoming-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-aggregation-incoming.png\" height=\"15\"></button>\r\n        <button id=\"aggregation-outgoing-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-aggregation-outgoing.png\" height=\"15\"></button>\r\n        <br>\r\n        <button id=\"association-incoming-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-association-incoming.png\" height=\"15\"></button>\r\n        <button id=\"association-outgoing-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-association-outgoing.png\" height=\"15\"></button>\r\n        <br>\r\n        <button id=\"use-incoming-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-use-incoming.png\" height=\"15\"></button>\r\n        <button id=\"use-outgoing-button\" class=\"uml-options-button\"><img src=\"../../assets/img/add-use-outgoing.png\" height=\"15\"></button>\r\n        <br>\r\n\r\n        <button title=\"Eliminar unidad\" class=\"delete-button uml-options-button\" (click)=\"deleteUnit()\">\r\n          <mat-icon class=\"button-icon\">delete</mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div #umlPathOptions (window:resize)=\"drawUmlPathOptions()\" [hidden]=\"!showUmlPathOptions\">\r\n      <div id=\"uml-path-options\">\r\n        <div *ngIf=\"selectedRelationType!=='COMPOSITION'\">\r\n          <button id=\"composition-relation-button\" class=\"uml-options-button uml-relation-button\"><img src=\"../../assets/img/add-composition-incoming.png\" height=\"15\"></button>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"selectedRelationType!=='INHERITANCE'\">\r\n          <button id=\"inheritance-relation-button\" class=\"uml-options-button uml-relation-button\"><img src=\"../../assets/img/add-inheritance-incoming.png\" height=\"15\"></button>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"selectedRelationType!=='AGGREGATION'\">\r\n          <button id=\"aggregation-relation-button\" class=\"uml-options-button uml-relation-button\"><img src=\"../../assets/img/add-aggregation-incoming.png\" height=\"15\"></button>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"selectedRelationType!=='ASSOCIATION'\">\r\n          <button id=\"association-relation-button\" class=\"uml-options-button uml-relation-button\"><img src=\"../../assets/img/add-association-incoming.png\" height=\"15\"></button>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"selectedRelationType!=='USE'\">\r\n          <button id=\"use-relation-button\" class=\"uml-options-button uml-relation-button\"><img src=\"../../assets/img/add-use-incoming.png\" height=\"15\"></button>\r\n        </div>\r\n\r\n        <button title=\"Eliminar relación\" class=\"delete-button uml-options-button\" (click)=\"deleteRelation()\">\r\n          <mat-icon class=\"button-icon\">delete</mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <svg id=\"svg\">\r\n      <path #umlNewPath id=\"path\"></path>\r\n    </svg>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit_unit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit/unit.service */ "./src/app/unit/unit.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ang-jsoneditor */ "./node_modules/ang-jsoneditor/fesm5/ang-jsoneditor.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../relation/relation.type */ "./src/app/relation/relation.type.ts");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tab/tab.service */ "./src/app/tab/tab.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmAction/confirm-action.component */ "./src/app/confirmAction/confirm-action.component.ts");










var ViewComponent = /** @class */ (function () {
    function ViewComponent(router, unitService, dialogService, tabService, dialog) {
        this.router = router;
        this.unitService = unitService;
        this.dialogService = dialogService;
        this.tabService = tabService;
        this.dialog = dialog;
        this.UNIT_NAME_SEPARATOR = '/';
        this.ENTER_KEY = 'Enter';
        this.ARROW_UP_KEY = 'ArrowUp';
        this.ARROW_DOWN_KEY = 'ArrowDown';
        this.searchField = '';
        this.showResults = false;
        this.results = [];
        this.arrowKeyLocation = 0;
        this.hideJson = true;
        this.data = {
            units: [],
            relations: []
        };
        this.units = new Map();
        this.relations = new Map();
        this.remainingUnits = 0;
        this.showMenu = true;
        this.disableUpButton = false;
        this.newUnitId = 0;
        this.newRelationId = 0;
        this.changed = false;
        this.showSpinner = false;
        this.showUmlNodeOptions = false;
        this.showUmlPathOptions = false;
        this.selectedRelationType = '';
        this.creatingRelation = null;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.tabService.setUnits();
        window.scroll(0, 0);
        window.document.body.style.overflow = 'hidden';
        this.editorOptions = new ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__["JsonEditorOptions"]();
        this.editorOptions.mode = 'code';
        this.focusUnit(1);
    };
    ViewComponent.prototype.ngAfterContentInit = function () {
        mermaid.initialize({
            theme: 'default',
            logLevel: 3,
            flowchart: { curve: 'basis' },
            gantt: { axisFormat: '%m/%d/%Y' },
            sequence: { actorMargin: 50 },
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        window.document.body.style.overflow = 'auto';
    };
    // Data
    ViewComponent.prototype.focusUnit = function (id) {
        this.showSpinner = true;
        this.focusedUnitId = id;
        this.units.clear();
        this.relations.clear();
        this.remainingUnits = 0;
        this.getUnitAndUpdateUml(this.focusedUnitId, new Set());
    };
    ViewComponent.prototype.getUnitAndUpdateUml = function (id, visited) {
        var _this = this;
        this.remainingUnits--;
        visited.add(id);
        this.unitService.getUnit(id).subscribe(function (data) {
            _this.addUnit(data);
            _this.remainingUnits += data.incomingRelations.length + 1;
            data.incomingRelations.forEach(function (relation) {
                _this.remainingUnits--;
                if (!_this.getRelationById(relation.id.toString())) {
                    var outgoing = +relation.outgoing;
                    if (!visited.has(outgoing)) {
                        _this.getUnitAndUpdateUml(outgoing, visited);
                    }
                    _this.addRelation(relation);
                }
            });
            if (_this.remainingUnits === 0) {
                _this.updateUml();
                _this.emptyResults();
                _this.showSpinner = false;
                var i_1 = 0;
                _this.units.forEach(function (unit) {
                    _this.unitService.getAbsoluteName(+unit.id).subscribe(function (u) {
                        _this.data.units.push(new VisibleUnit(unit.id, u.name));
                        i_1++;
                        if (i_1 === _this.units.size) {
                            _this.relations.forEach(function (relation) {
                                _this.data.relations.push(new VisibleRelation(relation.relationType, relation.incoming, relation.outgoing));
                            });
                            _this.editor.data = _this.data;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ViewComponent.prototype.upLevelAbove = function () {
        var _this = this;
        this.unitService.getParent(this.focusedUnitId).subscribe(function (parent) {
            _this.focusUnit(+parent.id);
        });
    };
    ViewComponent.prototype.addUnit = function (unit) {
        this.units.set(unit.id.toString(), unit);
    };
    ViewComponent.prototype.getUnitById = function (id) {
        return this.units.get(id);
    };
    ViewComponent.prototype.addRelation = function (relation) {
        this.relations.set(relation.id.toString(), relation);
    };
    ViewComponent.prototype.getRelationById = function (id) {
        return this.relations.get(id);
    };
    ViewComponent.prototype.getNewUnitId = function () {
        return '0' + this.newUnitId++;
    };
    ViewComponent.prototype.getNewRelationId = function () {
        return '0' + this.newRelationId++;
    };
    ViewComponent.prototype.save = function (goToUnit) {
        var _this = this;
        if (this.changed) {
            this.changed = false;
            this.showSpinner = true;
            var unitsToCreate_1 = [];
            this.units.forEach(function (unit) {
                if (unit.id.toString().substring(0, 1) === '0') {
                    unitsToCreate_1.push(unit);
                }
            });
            var i_2 = 0;
            unitsToCreate_1.forEach(function (unit) {
                var unitToCreate = {
                    id: '0',
                    name: unit.name,
                    outgoingRelations: [],
                    incomingRelations: [],
                    itineraries: [],
                    definitionQuestions: [],
                    listQuestions: [],
                    testQuestions: []
                };
                _this.unitService.createUnit(unitToCreate).subscribe(function (data) {
                    unit.id = data.id;
                    unit.name = data.name;
                    unit.incomingRelations.forEach(function (relation) {
                        relation.incoming = data.id.toString();
                    });
                    unit.outgoingRelations.forEach(function (relation) {
                        relation.outgoing = data.id.toString();
                    });
                    i_2++;
                    if (i_2 === unitsToCreate_1.length) {
                        _this.saveUnitsAndRelations(goToUnit);
                    }
                }, function (error) {
                    console.log(error);
                });
            });
            if (unitsToCreate_1.length === 0) {
                this.saveUnitsAndRelations(goToUnit);
            }
        }
    };
    ViewComponent.prototype.saveUnitsAndRelations = function (goToUnit) {
        var _this = this;
        var unitsToSave = [];
        this.units.forEach(function (unit) {
            var unitToSave = {
                id: unit.id,
                name: unit.name,
                outgoingRelations: unit.outgoingRelations,
                incomingRelations: unit.incomingRelations,
                itineraries: [],
                definitionQuestions: [],
                listQuestions: [],
                testQuestions: []
            };
            unitToSave.incomingRelations.forEach(function (relation) {
                if (relation.id.toString().substring(0, 1) === '0') {
                    relation.id = '0';
                }
            });
            unitToSave.outgoingRelations.forEach(function (relation) {
                if (relation.id.toString().substring(0, 1) === '0') {
                    relation.id = '0';
                }
            });
            unitsToSave.push(unitToSave);
        });
        this.unitService.saveUnits(unitsToSave).subscribe(function () {
            _this.focusUnit(_this.focusedUnitId);
            if (goToUnit) {
                _this.goToUnit(goToUnit);
            }
        }, function (error) {
            console.log(error);
        });
    };
    // Uml
    ViewComponent.prototype.updateUml = function () {
        var _this = this;
        var element = this.umlDiv.nativeElement;
        element.innerHTML = '';
        try {
            var uml = this.parseUml(this.relations);
            mermaid.render('uml', uml, function (svgCode, bindFunctions) {
                element.innerHTML = svgCode;
                _this.updateUmlNodeOptions();
            });
        }
        catch (error) { }
    };
    ViewComponent.prototype.updateUnitName = function () {
        var selectedUnit = this.getUnitById(this.selectedTarget.id.toString().substring(0, this.selectedTarget.id.length));
        this.changed = ((this.changed) || (selectedUnit.name !== this.umlNodeOptions.nativeElement.firstChild.value));
        selectedUnit.name = this.umlNodeOptions.nativeElement.firstChild.value;
        this.setShowUmlNodeOptions(false);
        this.setShowUmlPathOptions(false);
        this.updateUml();
    };
    ViewComponent.prototype.createUnit = function (relationType) {
        var selectedUnit = this.getUnitById(this.selectedTarget.id.toString().substring(0, this.selectedTarget.id.length));
        var newUnitName = 'Nueva unidad';
        var newUnit = {
            id: this.getNewUnitId().toString(),
            name: newUnitName,
            incomingRelations: [],
            outgoingRelations: []
        };
        var newRelation = {
            id: this.getNewRelationId().toString(),
            relationType: relationType,
            incoming: this.selectedTarget.id.toString().substring(0, this.selectedTarget.id.length),
            outgoing: newUnit.id.toString()
        };
        newUnit.outgoingRelations.push(newRelation);
        this.addUnit(newUnit);
        selectedUnit.incomingRelations.push(newRelation);
        this.addRelation(newRelation);
        this.updateUml();
        this.changed = true;
        return newUnit;
    };
    ViewComponent.prototype.createRelation = function (relationType, incoming, outgoing) {
        var newRelation = {
            id: this.getNewRelationId().toString(),
            relationType: relationType,
            incoming: incoming.id,
            outgoing: outgoing.id
        };
        var duplicateIncoming = this.checkDuplicateRelation(incoming, newRelation);
        var duplicateOutgoing = this.checkDuplicateRelation(outgoing, newRelation);
        if (!(duplicateIncoming && duplicateOutgoing)) {
            if (!duplicateIncoming) {
                incoming.incomingRelations.push(newRelation);
            }
            if (!duplicateOutgoing) {
                outgoing.outgoingRelations.push(newRelation);
            }
            this.addRelation(newRelation);
        }
        this.updateUml();
        this.changed = true;
    };
    ViewComponent.prototype.checkDuplicateRelation = function (unit, relation) {
        var duplicate = false;
        unit.incomingRelations.forEach(function (incomingRelation) {
            if ((!duplicate) && (incomingRelation.incoming.toString() === relation.incoming.toString()) && (incomingRelation.outgoing.toString() === relation.outgoing.toString())) {
                incomingRelation.relationType = relation.relationType;
                duplicate = true;
            }
        });
        unit.outgoingRelations.forEach(function (outgoingRelation) {
            if ((!duplicate) && (outgoingRelation.incoming.toString() === relation.incoming.toString()) && (outgoingRelation.outgoing.toString() === relation.outgoing.toString())) {
                outgoingRelation.relationType = relation.relationType;
                duplicate = true;
            }
        });
        return duplicate;
    };
    ViewComponent.prototype.deleteUnit = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmActionComponent"], {
            data: {
                confirmText: 'Se eliminará definitivamente la unidad y su contenido.',
                button1: 'Cancelar',
                button2: 'Eliminar'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            window.scroll(0, 0);
            if (result === 1) {
                _this.unitService.deleteUnit(+_this.selectedTarget.id).subscribe(function () {
                    if (+_this.focusedUnitId === +_this.selectedTarget.id) {
                        var focused_1 = false;
                        _this.getUnitById(_this.focusedUnitId.toString()).incomingRelations.forEach(function (relation) {
                            if ((!focused_1) && (_this.focusedUnitId.toString() !== relation.outgoing.toString())) {
                                _this.focusedUnitId = relation.outgoing.toString();
                                focused_1 = true;
                            }
                        });
                    }
                    _this.focusUnit(_this.focusedUnitId);
                });
            }
        });
    };
    ViewComponent.prototype.deleteRelation = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmActionComponent"], {
            data: {
                confirmText: 'Se eliminará la relación',
                button1: 'Cancelar',
                button2: 'Eliminar'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            window.scroll(0, 0);
            if (result === 1) {
                var splittedRelation = _this.selectedTarget.id.split('-');
                var incoming = splittedRelation[0];
                var outgoing_1 = splittedRelation[1];
                var relationType_1 = _this.getRelationTypeEquivalent(splittedRelation[2]);
                _this.units.get(incoming).incomingRelations.forEach(function (relation) {
                    if ((relation.outgoing.toString() === outgoing_1) && (relation.relationType === relationType_1)) {
                        _this.unitService.deleteRelation(+relation.id).subscribe(function () {
                            _this.focusUnit(_this.focusedUnitId);
                        });
                    }
                });
            }
        });
    };
    ViewComponent.prototype.findUnitTarget = function (id) {
        var found = false;
        var target = null;
        this.umlDiv.nativeElement.firstChild.childNodes.forEach(function (childNode) {
            var firstChild = childNode.firstChild;
            if ((!found) && (firstChild) && (firstChild.id) && (firstChild.id.toString().substring(0, firstChild.id.length) === id.toString())) {
                target = firstChild;
                found = true;
            }
        });
        return target;
    };
    ViewComponent.prototype.drawUmlNodeOptions = function () {
        var _this = this;
        var input = this.umlNodeOptions.nativeElement.firstChild;
        var padding = '0.5rem';
        input.style.left = 'calc(' + (this.selectedTarget.getBoundingClientRect().left + window.pageXOffset) + 'px + ' + padding + ')';
        input.style.width = 'calc(' + (this.selectedTarget.getBoundingClientRect().width) + 'px - ' + padding + ' - ' + padding + ')';
        input.style.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
        input.style.height = (this.selectedTarget.getBoundingClientRect().height) + 'px';
        var text = this.selectedTarget.nextSibling;
        if (text.innerHTML) {
            input.value = text.innerHTML;
        }
        text.innerHTML = '';
        input.focus();
        input.setSelectionRange(0, input.value.length);
        var optionsStyle = this.umlNodeOptions.nativeElement.lastChild.style;
        optionsStyle.left = (this.selectedTarget.getBoundingClientRect().right + window.pageXOffset) + 'px';
        optionsStyle.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
        this.disableUpButton = true;
        if (+this.focusedUnitId === +this.selectedTarget.id) {
            this.unitService.getParent(+this.focusedUnitId).subscribe(function (parent) {
                _this.disableUpButton = (parent === null);
            });
        }
    };
    ViewComponent.prototype.updateUmlNodeOptions = function () {
        if (this.showUmlNodeOptions) {
            this.drawUmlNodeOptions();
        }
        else {
            this.umlNodeOptions.nativeElement.firstChild.style.top = '120%';
            this.umlNodeOptions.nativeElement.lastChild.style.top = '120%';
        }
    };
    ViewComponent.prototype.setShowUmlNodeOptions = function (showUmlNodeOptions) {
        this.showUmlNodeOptions = showUmlNodeOptions;
    };
    ViewComponent.prototype.drawUmlPathOptions = function () {
        var relationType;
        if (this.selectedTarget.attributes[3]) {
            relationType = this.selectedTarget.attributes[3].nodeValue;
        }
        this.selectedRelationType = this.getRelationTypeEquivalent(relationType);
        var optionsStyle = this.umlPathOptions.nativeElement.firstChild.style;
        optionsStyle.left = (this.selectedTarget.getBoundingClientRect().right + window.pageXOffset) + 'px';
        optionsStyle.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
    };
    ViewComponent.prototype.setShowUmlPathOptions = function (showUmlNodeOptions) {
        this.showUmlPathOptions = showUmlNodeOptions;
    };
    ViewComponent.prototype.changeRelationType = function (id, newRelationType) {
        var splittedRelation = id.split('-');
        var incoming = splittedRelation[0];
        var outgoing = splittedRelation[1];
        var relationType = this.getRelationTypeEquivalent(splittedRelation[2]);
        this.units.get(incoming).incomingRelations.forEach(function (relation) {
            if ((relation.outgoing.toString() === outgoing) && (relation.relationType === relationType)) {
                relation.relationType = newRelationType;
            }
        });
        this.units.get(outgoing).outgoingRelations.forEach(function (relation) {
            if ((relation.incoming.toString() === incoming) && (relation.relationType === relationType)) {
                relation.relationType = newRelationType;
            }
        });
        this.setShowUmlPathOptions(false);
        this.updateUml();
        this.changed = true;
    };
    ViewComponent.prototype.getRelationTypeEquivalent = function (relationType) {
        var equivalent = _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].USE;
        if (relationType) {
            if (relationType.includes('composition')) {
                equivalent = _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].COMPOSITION;
            }
            else if (relationType.includes('extension')) {
                equivalent = _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].INHERITANCE;
            }
            else if (relationType.includes('aggregation')) {
                equivalent = _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].AGGREGATION;
            }
            else if (relationType.includes('dependency')) {
                equivalent = _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].ASSOCIATION;
            }
        }
        return equivalent;
    };
    // Key event listener
    ViewComponent.prototype.onKeyPress = function ($event) {
        if (($event.metaKey || $event.ctrlKey) && ($event.key === 's')) {
            $event.preventDefault();
            this.save(null);
        }
        if (($event.metaKey || $event.ctrlKey) && ($event.key === 'e')) {
            $event.preventDefault();
            this.hideJson = !this.hideJson;
        }
    };
    // Mouse event listener
    ViewComponent.prototype.documentClick = function (event) {
        var target = event.target;
        if (!this.creatingRelation) {
            // Search
            if ((target.id === 'result') || (target.id === 'unit-prefix') || (target.id === 'unit-name')) {
                this.focusUnit(+this.results[this.arrowKeyLocation].id);
            }
            else if ((target.attributes) && (target.attributes['class']) &&
                ((target.attributes['class'].nodeValue === 'mat-form-field-flex') ||
                    (target.attributes['class'].nodeValue.includes('mat-form-field-outline')) ||
                    (target.attributes['class'].nodeValue === 'mat-form-field-infix') || (target.id === 'search-input'))) {
                this.setShowResults(true);
            }
            else {
                this.setShowResults(false);
            }
            // Uml
            if ((target.id === 'composition-incoming-button') || (target.parentElement.id === 'composition-incoming-button')) {
                this.selectedTarget = this.findUnitTarget(this.createUnit(_relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].COMPOSITION).id);
                this.drawUmlNodeOptions();
            }
            else if ((target.id === 'inheritance-incoming-button') || (target.parentElement.id === 'inheritance-incoming-button')) {
                this.selectedTarget = this.findUnitTarget(this.createUnit(_relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].INHERITANCE).id);
                this.drawUmlNodeOptions();
            }
            else if ((target.id === 'aggregation-incoming-button') || (target.parentElement.id === 'aggregation-incoming-button')) {
                this.selectedTarget = this.findUnitTarget(this.createUnit(_relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].AGGREGATION).id);
                this.drawUmlNodeOptions();
            }
            else if ((target.id === 'association-incoming-button') || (target.parentElement.id === 'association-incoming-button')) {
                this.selectedTarget = this.findUnitTarget(this.createUnit(_relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].ASSOCIATION).id);
                this.drawUmlNodeOptions();
            }
            else if ((target.id === 'use-incoming-button') || (target.parentElement.id === 'use-incoming-button')) {
                this.selectedTarget = this.findUnitTarget(this.createUnit(_relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].USE).id);
                this.drawUmlNodeOptions();
            }
            else if ((target.id === 'composition-outgoing-button') || (target.parentElement.id === 'composition-outgoing-button')) {
                this.creatingRelation = {
                    relationType: _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].COMPOSITION,
                    outgoing: this.selectedTarget.id.toString(),
                    boundingClientRect: this.selectedTarget.getBoundingClientRect()
                };
                this.closeUmlNodeOptions();
            }
            else if ((target.id === 'inheritance-outgoing-button') || (target.parentElement.id === 'inheritance-outgoing-button')) {
                this.creatingRelation = {
                    relationType: _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].INHERITANCE,
                    outgoing: this.selectedTarget.id.toString(),
                    boundingClientRect: this.selectedTarget.getBoundingClientRect()
                };
                this.closeUmlNodeOptions();
            }
            else if ((target.id === 'aggregation-outgoing-button') || (target.parentElement.id === 'aggregation-outgoing-button')) {
                this.creatingRelation = {
                    relationType: _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].AGGREGATION,
                    outgoing: this.selectedTarget.id.toString(),
                    boundingClientRect: this.selectedTarget.getBoundingClientRect()
                };
                this.closeUmlNodeOptions();
            }
            else if ((target.id === 'association-outgoing-button') || (target.parentElement.id === 'association-outgoing-button')) {
                this.creatingRelation = {
                    relationType: _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].ASSOCIATION,
                    outgoing: this.selectedTarget.id.toString(),
                    boundingClientRect: this.selectedTarget.getBoundingClientRect()
                };
                this.closeUmlNodeOptions();
            }
            else if ((target.id === 'use-outgoing-button') || (target.parentElement.id === 'use-outgoing-button')) {
                this.creatingRelation = {
                    relationType: _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].USE,
                    outgoing: this.selectedTarget.id.toString(),
                    boundingClientRect: this.selectedTarget.getBoundingClientRect()
                };
                this.closeUmlNodeOptions();
            }
            else if ((target.id === 'composition-relation-button') || (target.parentElement.id === 'composition-relation-button')) {
                this.changeRelationType(this.selectedTarget.id.toString(), _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].COMPOSITION);
            }
            else if ((target.id === 'inheritance-relation-button') || (target.parentElement.id === 'inheritance-relation-button')) {
                this.changeRelationType(this.selectedTarget.id.toString(), _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].INHERITANCE);
            }
            else if ((target.id === 'aggregation-relation-button') || (target.parentElement.id === 'aggregation-relation-button')) {
                this.changeRelationType(this.selectedTarget.id.toString(), _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].AGGREGATION);
            }
            else if ((target.id === 'association-relation-button') || (target.parentElement.id === 'association-relation-button')) {
                this.changeRelationType(this.selectedTarget.id.toString(), _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].ASSOCIATION);
            }
            else if ((target.id === 'use-relation-button') || (target.parentElement.id === 'use-relation-button')) {
                this.changeRelationType(this.selectedTarget.id.toString(), _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].USE);
            }
            else if ((target.id !== 'uml-edit-input') && (target.id !== 'uml-node-options')) {
                this.closeUmlNodeOptions();
            }
        }
        else {
            if ((target.tagName === 'rect') || (target.tagName === 'text')) {
                this.createRelation(this.creatingRelation.relationType, this.getUnitById(target.id.toString().substring(0, target.id.toString().length)), this.getUnitById(this.creatingRelation.outgoing));
            }
            this.creatingRelation = null;
            this.umlNewPath.nativeElement.setAttribute('d', '');
        }
    };
    ViewComponent.prototype.documentDoubleClick = function (event) {
        var _this = this;
        this.creatingRelation = null;
        var target = event.target;
        if ((!this.showUmlNodeOptions) && ((target.tagName === 'rect') || (target.tagName === 'text'))) {
            var id_1 = target.id.toString().substring(0, target.id.toString().length);
            if (this.changed) {
                var dialogRef = this.dialog.open(_confirmAction_confirm_action_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmActionComponent"], {
                    data: {
                        confirmText: 'Se han realizado cambios',
                        button1: 'Guardar',
                        button2: 'Descartar'
                    }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    if (result === 1) {
                        _this.goToUnit(id_1);
                    }
                    else if (result === 2) {
                        _this.save(id_1);
                    }
                });
            }
            else {
                this.goToUnit(id_1);
            }
        }
    };
    ViewComponent.prototype.documentRightClick = function (event) {
        event.preventDefault();
        this.creatingRelation = null;
        var target = event.target;
        if ((!this.showUmlNodeOptions) && ((target.tagName === 'rect') || (target.tagName === 'text') || (target.tagName === 'path'))) {
            this.selectedTarget = target;
            if (target.tagName === 'path') {
                this.setShowUmlPathOptions(true);
                this.drawUmlPathOptions();
            }
            else {
                this.setShowUmlPathOptions(false);
                if (target.tagName === 'text') {
                    this.selectedTarget = target.previousElementSibling;
                }
                this.setShowUmlNodeOptions(true);
                this.drawUmlNodeOptions();
            }
        }
        else if ((target.id !== 'uml-edit-input') && (target.id !== 'uml-node-options')) {
            this.closeUmlNodeOptions();
        }
    };
    ViewComponent.prototype.closeUmlNodeOptions = function () {
        if (this.showUmlNodeOptions) {
            this.updateUnitName();
        }
        this.setShowUmlNodeOptions(false);
        this.setShowUmlPathOptions(false);
        this.updateUmlNodeOptions();
    };
    ViewComponent.prototype.onMouseMove = function (event) {
        if (this.creatingRelation) {
            this.umlNewPath.nativeElement.setAttribute('d', 'M' + (this.creatingRelation.boundingClientRect.right + window.pageXOffset - (this.creatingRelation.boundingClientRect.width / 2)) +
                ' ' + (this.creatingRelation.boundingClientRect.top + window.pageYOffset + (this.creatingRelation.boundingClientRect.height / 2)) +
                ' L' + event.clientX + ' ' + event.clientY);
        }
        else {
            this.umlNewPath.nativeElement.setAttribute('d', '');
        }
    };
    // Menu
    ViewComponent.prototype.setShowMenu = function (showMenu) {
        this.showMenu = showMenu;
    };
    // Search
    ViewComponent.prototype.search = function () {
        var _this = this;
        if (this.searchField.length > 0) {
            this.unitService.searchByNameContaining(this.searchField).subscribe(function (data) {
                _this.results = data;
                _this.arrowKeyLocation = 0;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.emptyResults();
        }
    };
    ViewComponent.prototype.setShowResults = function (showResults) {
        if (showResults) {
            this.search();
        }
        else {
            this.emptyResults();
        }
        this.showResults = showResults;
    };
    ViewComponent.prototype.emptyResults = function () {
        this.results = [];
    };
    ViewComponent.prototype.keyDown = function (event) {
        if ((event.key === this.ENTER_KEY) && (this.results.length > 0)) {
            this.focusUnit(+this.results[this.arrowKeyLocation].id);
        }
        else if ((event.key === this.ARROW_UP_KEY) && (this.arrowKeyLocation > 0)) {
            this.arrowKeyLocation--;
        }
        else if ((event.key === this.ARROW_DOWN_KEY) && (this.arrowKeyLocation < (this.results.length - 1))) {
            this.arrowKeyLocation++;
        }
    };
    ViewComponent.prototype.setActive = function (i) {
        this.arrowKeyLocation = i;
    };
    ViewComponent.prototype.getUnitPrefix = function (completeName) {
        var nameLength = completeName.split(this.UNIT_NAME_SEPARATOR)[completeName.split(this.UNIT_NAME_SEPARATOR).length - 1].length;
        return completeName.substring(0, completeName.length - nameLength);
    };
    ViewComponent.prototype.getUnitName = function (completeName) {
        return completeName.split(this.UNIT_NAME_SEPARATOR)[completeName.split(this.UNIT_NAME_SEPARATOR).length - 1];
    };
    // Routing
    ViewComponent.prototype.goToUnit = function (id) {
        this.router.navigate(['/unit/' + id]);
    };
    // Uml parser
    ViewComponent.prototype.parseUml = function (relations) {
        var parsedRelations = this.getRelationsDiagram(relations);
        if (parsedRelations !== '') {
            return 'classDiagram\n' + parsedRelations;
        }
        else if (this.getUnitById(this.focusedUnitId.toString())) {
            return 'classDiagram\n' + this.getOneUnitDiagram();
        }
        else {
            throw new Error('Invalid data. Unable to display uml');
        }
    };
    ViewComponent.prototype.getOneUnitDiagram = function () {
        return this.parseUnitName(this.focusedUnitId.toString()) + '<|--|>' + this.parseUnitName(this.focusedUnitId.toString());
    };
    ViewComponent.prototype.getRelationsDiagram = function (relations) {
        var _this = this;
        var uml = '';
        var connector = '';
        relations.forEach(function (relation) {
            switch (relation.relationType) {
                case _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].ASSOCIATION: {
                    connector = '<--';
                    break;
                }
                case _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].AGGREGATION: {
                    connector = '"1"o--"many"';
                    break;
                }
                case _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].COMPOSITION: {
                    connector = '"0"*--"0..n"';
                    break;
                }
                case _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].INHERITANCE: {
                    connector = '<|--';
                    break;
                }
                case _relation_relation_type__WEBPACK_IMPORTED_MODULE_5__["RelationType"].USE: {
                    connector = '--';
                    break;
                }
                default: {
                    throw new Error('Unrecognized uml relation type');
                }
            }
            uml += _this.parseUnitName(relation.incoming.toString()) + connector + _this.parseUnitName(relation.outgoing.toString()) + '\n';
        });
        return uml;
    };
    ViewComponent.prototype.parseUnitName = function (id) {
        var name = id;
        var unit = this.getUnitById(id);
        if (unit) {
            name += unit.name;
        }
        return name;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__["JsonEditorComponent"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__["JsonEditorComponent"])
    ], ViewComponent.prototype, "editor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('uml'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewComponent.prototype, "umlDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('umlNodeOptions'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ViewComponent.prototype, "umlNodeOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('umlPathOptions'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ViewComponent.prototype, "umlPathOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('umlNewPath'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ViewComponent.prototype, "umlNewPath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ViewComponent.prototype, "onKeyPress", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ViewComponent.prototype, "documentClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:dblclick', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ViewComponent.prototype, "documentDoubleClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:contextmenu', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ViewComponent.prototype, "documentRightClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:mousemove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ViewComponent.prototype, "onMouseMove", null);
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _unit_unit_service__WEBPACK_IMPORTED_MODULE_1__["UnitService"], _covalent_core__WEBPACK_IMPORTED_MODULE_6__["TdDialogService"],
            _tab_tab_service__WEBPACK_IMPORTED_MODULE_7__["TabService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], ViewComponent);
    return ViewComponent;
}());

var VisibleUnit = /** @class */ (function () {
    function VisibleUnit(id, name) {
        this.id = id;
        this.name = name;
    }
    return VisibleUnit;
}());
var VisibleRelation = /** @class */ (function () {
    function VisibleRelation(relationType, incoming, outgoing) {
        this.relationType = relationType;
        this.incoming = incoming;
        this.outgoing = outgoing;
    }
    return VisibleRelation;
}());


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map