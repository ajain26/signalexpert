"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var userplan_subscribeduserlist_component_1 = require("./userplan-subscribeduserlist.component");
describe('UserplanSubscribeduserlistComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [userplan_subscribeduserlist_component_1.UserplanSubscribeduserlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(userplan_subscribeduserlist_component_1.UserplanSubscribeduserlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=userplan-subscribeduserlist.component.spec.js.map