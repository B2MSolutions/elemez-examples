To download debug logs from elemez to ~/logs folder you need to:

 1. Install [AWS command line interface](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
 2. Configure AWS CLI with your *key* and *secret*:
    * Run `aws configure` from your terminal
    * This will run simple wizard that will ask you for *key* and *secret*. Ignore other questions(just press Enter)
    * More detailed instructions for different operating systems can be found [here](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
 3. You've already got link in format `s3://com.b2msolutions.elemez.logs/{folder-name}/{file-name}.zip`
 4. Run this command `aws s3 cp s3://com.b2msolutions.elemez.logs/{folder-name}/{file-name}.zip ~/logs/{desired-file-name}.zip`
