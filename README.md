# Cisco Webex Teams Task

A VSTS/TFS Task to post messages to Cisco Webex Teams

[![Build status](https://carlo.visualstudio.com/VSTS_Tasks/_apis/build/status/Spark)](https://carlo.visualstudio.com/VSTS_Tasks/_build/latest?definitionId=13)

## How to get the task to work

1. You will need a Cisco Webex Teams Access Token in order to post your messages. To do this, [create a Bot](https://developer.webex.com/apps.html) under the My Apps section. Make sure you save the token to be used later.
1. Once created, add the bot to the team and space you'd like to post to.
1. Then, in the VSTS task, input your token, team name, space name, and the message you'd like to output.

Note: All fields are required to help ensure that the message reaches the correct space. It is still possible that you have duplicate combinations of team and space names.
