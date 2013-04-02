package com.b2msolutions.elemez.examples.battery;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.provider.Settings;
import android.view.View;

public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }

    public void onClick(View sender) {

        long timestamp = System.currentTimeMillis();
        int cycleCount = this.incrementCycleCount();

        Intent intent = new Intent("elemez.intent.action.ACTION_BATTERY_CHARGE_CYCLE_COUNT_CHANGED");
        intent.putExtra("elemez.intent.extra.TIMESTAMP", timestamp);
        intent.putExtra("elemez.intent.extra.CYCLE_COUNT", cycleCount);

        intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
        this.sendBroadcast(intent);
    }

    private int incrementCycleCount() {
        SharedPreferences batteryDetails = this.getSharedPreferences("batteryDetails", MODE_PRIVATE);
        int cycleCount = batteryDetails.getInt("cycleCount", 0);
        ++cycleCount;
        SharedPreferences.Editor editor = batteryDetails.edit();
        editor.putInt("cycleCount", cycleCount);
        editor.commit();

        String android_id = Settings.Secure.getString(this.getContentResolver(), Settings.Secure.ANDROID_ID);
        return cycleCount;
    }
}
