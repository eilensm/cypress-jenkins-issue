import mountVue from "cypress-vue-unit-test";
import MyInputComponent from "../../../src/components/MyInputComponent.vue";

describe("MyInputComponent", () => {
  const options = {
    propsData: {
      firstName: "Jim"
    }
  };

  beforeEach(mountVue(MyInputComponent, options));

  it("should accept valid input", () => {
    getTextBox()
      .type("John")
      .should("have.value", "John");
  });

  function getTextBox() {
    return cy.get('[data-qa="text-box"]');
  }
});
