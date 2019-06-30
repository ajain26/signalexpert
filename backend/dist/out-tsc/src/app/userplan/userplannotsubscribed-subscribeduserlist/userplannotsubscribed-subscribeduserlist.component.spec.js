"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var userplannotsubscribed_subscribeduserlist_component_1 = require("./userplannotsubscribed-subscribeduserlist.component");
describe('UserplannotsubscribedSubscribeduserlistComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [userplannotsubscribed_subscribeduserlist_component_1.UserplannotsubscribedSubscribeduserlistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(userplannotsubscribed_subscribeduserlist_component_1.UserplannotsubscribedSubscribeduserlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=userplannotsubscribed-subscribeduserlist.component.spec.js.map