package com.anyu.callforwarding;

import android.app.Service;
import android.content.Intent;
import android.os.Build;
import android.os.IBinder;
import android.telephony.PhoneStateListener;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.Nullable;


public class CallForwardingService extends Service {

    private View phoneCallView;
    private TextView tvCallNumber;
    private Button btnOpenApp;

    private WindowManager windowManager;
    private WindowManager.LayoutParams params;

    private PhoneStateListener phoneStateListener;
    private TelephonyManager telephonyManager;

    private String callNumber;
    private boolean hasShown;
    private boolean isCallingIn;

    @Override
    public void onCreate() {
        super.onCreate();
        Log.e("测试","哈哈哈哈" );

        initPhoneStateListener();
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    /**
     * 初始化来电状态监听器
     */
    private void initPhoneStateListener() {
        phoneStateListener = new PhoneStateListener() {
            @Override
            public void onCallStateChanged(int state, String incomingNumber) {
                super.onCallStateChanged(state, incomingNumber);

                callNumber = incomingNumber;

                switch (state) {
                    case TelephonyManager.CALL_STATE_IDLE: // 待机，即无电话时，挂断时触发

                        break;

                    case TelephonyManager.CALL_STATE_RINGING: // 响铃，来电时触发
                        isCallingIn = true;

                        Log.e("来电电话",callNumber );

                        break;

                    case TelephonyManager.CALL_STATE_OFFHOOK: // 摘机，接听或拨出电话时触发

                        break;

                    default:
                        break;

                }
            }
        };

        // 设置来电监听器
        telephonyManager = (TelephonyManager) getSystemService(TELEPHONY_SERVICE);
        if (telephonyManager != null) {
            telephonyManager.listen(phoneStateListener, PhoneStateListener.LISTEN_CALL_STATE);
        }

    }
}
