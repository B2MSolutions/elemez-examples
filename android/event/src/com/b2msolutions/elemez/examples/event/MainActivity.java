package com.b2msolutions.elemez.examples.event;

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
        String type = ((TextView)findViewById(R.id.editTextType)).getText().toString();

        String key1 = ((TextView)findViewById(R.id.editTextKey1)).getText().toString();
        String value1 = ((TextView)findViewById(R.id.editTextValue1)).getText().toString();
        String key2 = ((TextView)findViewById(R.id.editTextKey2)).getText().toString();
        String value2 = ((TextView)findViewById(R.id.editTextValue2)).getText().toString();
        String key3 = ((TextView)findViewById(R.id.editTextKey3)).getText().toString();
        String value3 = ((TextView)findViewById(R.id.editTextValue3)).getText().toString();

        Bundle bundle = new Bundle();
        bundle.putString(key1, value1);
        bundle.putString(key2, value2);
        bundle.putString(key3, value3);

        Intent intent = new Intent("elemez.intent.action.ACTION_EVENT");
        intent.putExtra("elemez.intent.extra.TIMESTAMP", timestamp);
        intent.putExtra("elemez.intent.extra.SENDER", sender);
        intent.putExtra("elemez.intent.extra.SOURCE", source);
        intent.putExtra("elemez.intent.extra.TYPE", type);
        intent.putExtra("elemez.intent.extra.DATA", bundle);

        intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
        this.sendBroadcast(intent);
    }
}
