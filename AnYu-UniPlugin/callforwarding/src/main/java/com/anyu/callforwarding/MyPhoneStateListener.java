package com.anyu.callforwarding;

import static android.content.Context.TELEPHONY_SERVICE;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.telecom.Call;
import android.telephony.PhoneStateListener;
import android.telephony.TelephonyManager;
import android.util.Log;

import androidx.core.app.ActivityCompat;

import com.anyu.callforwarding.dto.CallForwardingDto;

import java.lang.reflect.InvocationTargetException;

public class MyPhoneStateListener extends PhoneStateListener {
    private Context context;
    public static Call call;
    private TelephonyManager telephonyManager;

    public MyPhoneStateListener(Context context) {
        this.context = context;
    }
    @Override
    public void onCallStateChanged(int state, String incomingNumber) {
        super.onCallStateChanged(state, incomingNumber);
        telephonyManager = (TelephonyManager) context.getSystemService(TELEPHONY_SERVICE);
        switch (state) {
            case TelephonyManager.CALL_STATE_RINGING:
                // 有来电
                Log.d("PhoneListener", "有来电，来电号码: " + incomingNumber);
                forwardCall(CallForwardingDto.getForwardingPhone("8520"));
                break;
            case TelephonyManager.CALL_STATE_OFFHOOK:
                // 通话中
                Log.d("PhoneListener", "通话中");
                break;
            case TelephonyManager.CALL_STATE_IDLE:
                // 挂断电话
                Log.d("PhoneListener", "通话结束");
                break;
        }
    }
    public void forwardCall(String phoneNumber) {
        try {
//            // 执行呼叫转发
//            Intent intent = new Intent(Intent.ACTION_CALL);
//            intent.setData(Uri.parse("tel:" + phoneNumber));
//            context.startActivity(intent);
            // 根据来电号码执行转发操作
            Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse("tel:" + phoneNumber));
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(intent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

