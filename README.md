# Attention: I no longer use this task day to day and am looking to pass it on to someone who's willing to maintain it.

---

# Cisco Webex Teams Task

A VSTS/TFS Task to post messages to Cisco Webex Teams

[![Build status](https://carlo.vsrm.visualstudio.com/_apis/public/Release/badge/2a4da4b3-df80-44fa-b40f-1f86827ea145/3/3)](https://carlo.vsrm.visualstudio.com/_apis/public/Release/badge/2a4da4b3-df80-44fa-b40f-1f86827ea145/3/3)

## How to get the task to work

1. You will need a Cisco Webex Teams Access Token in order to post your messages. To do this, [create a Bot](https://developer.webex.com/apps.html) under the My Apps section. Make sure you save the token to be used later.
1. Once created, add the bot to the team and space you'd like to post to.
1. Then, in the VSTS task, input your token, team name, space name, and the message you'd like to output.

Note: All fields are required to help ensure that the message reaches the correct space. It is still possible that you have duplicate combinations of team and space names.
