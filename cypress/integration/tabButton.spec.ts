/// <reference types="cypress" />
import { buttonSelectors, tabSelectors } from "./selectors.spec";

describe("버튼 작동 여부 확인", function () {
  it("1. 메인 화면 접속", () => {
    cy.visit("/");
  });

  it("2. 저장버튼 테스트", () => {
    const Num = 5;
    if (Num < 5)
      console.error(
        "테스트를 위해 저장할 비디오 갯수는 5개 이상이어야 합니다."
      );
    cy.storedVideo(Num);
    cy.get(buttonSelectors.searchTabDeleteButton).first().click();
    cy.get(buttonSelectors.searchTabDeleteButton).should(
      "have.length",
      Num - 1
    );

    // 볼 영상 탭
    cy.get(tabSelectors.notWatchTab).click();
    cy.get(buttonSelectors.storedTabWatchButton).first().click();
    cy.get(buttonSelectors.storedTabWatchButton).first().click();
    cy.get(buttonSelectors.storedTabDeleteButton).should(
      "have.length",
      Num - 3
    );
    cy.get(buttonSelectors.storedTabLikeButton).first().click();
    cy.get(buttonSelectors.storedTabNotLikeButton).should("have.length", 1);

    cy.get(buttonSelectors.storedTabDeleteButton).first().click();
    cy.get(buttonSelectors.storedTabDeleteButton).should(
      "have.length",
      Num - 4
    );

    // 본 영상 탭
    cy.get(tabSelectors.watchTab).click();
    cy.get(buttonSelectors.storedTabNotWatchButton).first().click();
    cy.get(buttonSelectors.storedTabDeleteButton).should(
      "have.length",
      Num - 4
    );

    cy.get(buttonSelectors.storedTabLikeButton).first().click();
    cy.get(buttonSelectors.storedTabNotLikeButton).should("have.length", 1);

    // 좋아요 탭
    cy.get(tabSelectors.likeVideoTab).click();

    cy.get(buttonSelectors.storedTabNotWatchButton).first().click();
    cy.get(buttonSelectors.storedTabWatchButton).should("have.length", 1);

    cy.get(buttonSelectors.storedTabWatchButton).first().click();
    cy.get(buttonSelectors.storedTabNotWatchButton).should("have.length", 1);

    cy.get(buttonSelectors.storedTabNotLikeButton).first().click();
    cy.get(buttonSelectors.storedTabDeleteButton).should("have.length", 0);
  });
});
