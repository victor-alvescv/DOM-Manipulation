# Instagram Followers

In this challenge, you will be making a clone version of Instagram followers page.

![Demo](demo.gif)

## Instructions

The boilerplate for the challenge can be found in `starter`. You only need to make changes to `app.js`, as we have provided you with the necessary HTML/CSS. Please follow the same example in `index.html` when rendering a user profile to ensure that you have the correct styling.

To mimic data fetching from a remote API, we have provided you with two functions in `app.js`:
- `fetchFollowerIds()`: This function asynchronously returns an array of user IDs, which can be use by `fetchUserData` to get their details.
- `fetchUserData(id)`: This function asynchronously returns the user detail given a specified ID.

Your task is to use these functions to get all 100 follower profiles and render them to the screen (similar to the demo).

## Requirements
- All 100 user profiles should be rendered to the modal.
- All profiles should be processed concurrently. In total, it should take less than 1.5 seconds to render everything to the screen.