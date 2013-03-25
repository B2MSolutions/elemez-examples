package com.b2msolutions.elemez.examples.disruption;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }

    public void raiseIntent(View view) {
        long timestamp = System.currentTimeMillis();
        String sender = ((TextView)findViewById(R.id.editTextSender)).getText().toString();
        String source = ((TextView)findViewById(R.id.editTextSource)).getText().toString();
        boolean userInitiated = ((CheckBox)findViewById(R.id.checkBoxUserInitiated)).isChecked();

        Intent intent = new Intent("elemez.intent.action.ACTION_DISRUPTED");
        intent.putExtra("elemez.intent.extra.TIMESTAMP", timestamp);
        intent.putExtra("elemez.intent.extra.SENDER", sender);
        intent.putExtra("elemez.intent.extra.SOURCE", source);
        intent.putExtra("elemez.intent.extra.USER_INITIATED", userInitiated);

        intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
        this.sendBroadcast(intent);
    }
}
