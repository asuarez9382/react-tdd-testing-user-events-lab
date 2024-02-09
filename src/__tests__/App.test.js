import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from '../App.js';
import '@testing-library/jest-dom';

import { useEffect } from "react";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  //Arrange
  render(<App />)
  //Act
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email address/i);
  //Assert
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  //Arrange
  render(<App />)
  //Act
  const artCheckBox = screen.getByRole("checkbox", {name: /art/i});
  const musicCheckBox = screen.getByRole("checkbox", {name: /music/i})
  const foodCheckBox = screen.getByRole("checkbox", {name: /food/i})
  //Assert
  expect(artCheckBox).toBeInTheDocument();
  expect(musicCheckBox).toBeInTheDocument();
  expect(foodCheckBox).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  //Arrange
  render(<App />)
  //Act
  const artCheckBox = screen.getByRole("checkbox", {name: /art/i});
  const musicCheckBox = screen.getByRole("checkbox", {name: /music/i})
  const foodCheckBox = screen.getByRole("checkbox", {name: /food/i})
  //Assert
  expect(artCheckBox).not.toBeChecked();
  expect(musicCheckBox).not.toBeChecked();
  expect(foodCheckBox).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  //Arrange
  render(<App />)
  //Act
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email address/i);

  userEvent.type(nameInput, 'Mochi Suarez');
  userEvent.type(emailInput, 'mochi@mochi.com')
  
  //Assert
  expect(nameInput).toHaveValue("Mochi Suarez");
  expect(emailInput).toHaveValue("mochi@mochi.com")
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  //Arrange
  render(<App />)
  //Act
  const artCheckBox = screen.getByRole("checkbox", {name: /art/i});
  const musicCheckBox = screen.getByRole("checkbox", {name: /music/i})
  const foodCheckBox = screen.getByRole("checkbox", {name: /food/i})

  userEvent.click(artCheckBox)
  userEvent.click(musicCheckBox)
  userEvent.click(foodCheckBox)

  //Assert
  expect(artCheckBox).toBeChecked();
  expect(musicCheckBox).toBeChecked();
  expect(foodCheckBox).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  //Arrange
  render(<App />)
  //Act
  const submitButton = screen.getByRole("button", {name: /submit/i})
  userEvent.click(submitButton);
  //Assert
  const displayMessage = screen.getByText(/submitted/i)
  expect(displayMessage).toBeInTheDocument();
});
