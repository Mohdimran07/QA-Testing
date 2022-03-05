import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CandidateInfo from "./Pages/CandidateInfo";

describe("test on App component", () => {
  test("rendering App component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("Test on CandidateInfo component", () => {
  test("rendering CandidateInfo component", () => {
    render(
      <BrowserRouter>
        <CandidateInfo />
      </BrowserRouter>
    );
    screen.debug();
  });

  test("rendering CandidateInfo name placeHolder ", () => {
    render(
      <BrowserRouter>
        <CandidateInfo />
      </BrowserRouter>
    );
    const placeholderNameText = screen.getByPlaceholderText("Enter your name");
    expect(placeholderNameText).toBeInTheDocument();
  });
  test("rendering CandidateInfo name placeHolder Text ", () => {
    render(
      <BrowserRouter>
        <CandidateInfo />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByPlaceholderText(/Enter your name/), {
      target: { value: "Imran" },
    });
  });

  test("rendering CandidateInfo age placeHolder ", () => {
    render(
      <BrowserRouter>
        <CandidateInfo />
      </BrowserRouter>
    );
    const placeholderAgeText = screen.getByPlaceholderText(/Enter your age/);
    expect(placeholderAgeText).toBeInTheDocument();
  });

  test("rendering CandidateInfo name placeHolder text ", () => {
    render(
      <BrowserRouter>
        <CandidateInfo />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByPlaceholderText(/Enter your age/)),
      {
        target: { value: 22 },
      };
  });

  // test("test for button", () => {
  //   render(
  //     <BrowserRouter>
  //       <CandidateInfo />
  //     </BrowserRouter>
  //   );

  //   expect(screen.getByRole("button")).toBeInTheDocument();
  // });
   test("test for textBox", () => {
    render(
      <BrowserRouter>
        <CandidateInfo />
      </BrowserRouter>
    );

    const elemet = screen.getAllByRole("textbox");
    expect(elemet.length).toBe(1);
  });
});
