"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var userplannotapproove_freetrail_component_1 = require("./userplannotapproove-freetrail.component");
describe('UserplannotapprooveFreetrailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [userplannotapproove_freetrail_component_1.UserplannotapprooveFreetrailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(userplannotapproove_freetrail_component_1.UserplannotapprooveFreetrailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=userplannotapproove-freetrail.component.spec.js.map