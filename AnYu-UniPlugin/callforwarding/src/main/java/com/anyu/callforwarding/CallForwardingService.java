package com.anyu.callforwarding;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.telecom.Call;
import android.telecom.CallScreeningService;
import android.telecom.TelecomManager;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.core.app.ActivityCompat;

import com.anyu.callforwarding.dto.CallForwardingDto;
import com.anyu.callforwarding.utils.StringUtils;

@RequiresApi(api = Build.VERSION_CODES.N)
public class CallForwardingService extends CallScreeningService {
    String TAG = "tag";
    TelecomManager telMgr;

    /**
     * 来电话时的操作
     * @param details
     */
    @Override
    public void onScreenCall(@NonNull Call.Details details) {
        String source_Phone = details.getHandle().toString(); // 来电号码
        String phoneNumber = CallForwardingDto.getForwardingPhone(source_Phone);
        Log.e("来电号码", source_Phone);
        Log.e("转移的号码", phoneNumber);
        // 从 JavaScript 传递的参数中获取要转移到的电话号码
        try {
            String jsphoneNumber = details.getExtras().getString("phoneNumber");
            Log.e("js获取的号码", jsphoneNumber);
        } catch (Exception e) {
            e.printStackTrace();
        }
        /**
         * 获取TelephonyManager
         */
        telMgr = getSystemService(TelecomManager.class);
        if (telMgr != null && StringUtils.isNotBlank(phoneNumber) && CallForwardingDto.getCallForward()) {
            /**
             * 将来电转移到给定的号码中
             */
            Intent intent = new Intent(Intent.ACTION_CALL);
            intent.setData(Uri.parse("tel:" + phoneNumber));
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            if (ActivityCompat.checkSelfPermission(this, Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
                return;
            }
            telMgr.placeCall(intent.getData(), null);
        }
    }
}
