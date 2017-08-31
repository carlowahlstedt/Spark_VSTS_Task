# Spark Task

A VSTS/TFS Task to post messages to Cisco Spark

## How to get the task to work:

1. You will need a Cisco Spark Access Token in order to post your messages. To do this, [create a Bot](https://developer.ciscospark.com/apps.html) under the My Apps section. Make sure you save the token to be used later.
1. Once created, add the bot to the team and space you'd like to post to.
1. Then, in the VSTS task, input your token, team name, space name, and the message you'd like to output.

## Known Issues

- The message box is suppose to [support markdown](https://github.com/ciscospark/spark-js-sdk/issues/680).