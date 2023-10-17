package com.anyu.callforwarding;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.telephony.TelephonyManager;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;

import com.alibaba.fastjson.JSONObject;
import com.anyu.callforwarding.dto.CallForwardingDto;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniDestroyableModule;
import io.dcloud.feature.uniapp.common.UniModule;

public class CallTransferHandler extends UniModule {
    private static final int REQUEST_CALL_PHONE_PERMISSION = 101;
    /**
     * 对单个号码设置呼叫转移
     * @param sourcePhone
     * @param forwardPhone
     */
    @UniJSMethod(uiThread = true)
    public void setCallForward(String sourcePhone,String forwardPhone){
        CallForwardingDto.setForwardingPhone(sourcePhone,forwardPhone);
    }

    /**
     * 开启呼叫转移
     */
    @UniJSMethod(uiThread = true)
    public void OpenCallForward(){
        CallForwardingDto.OpenCallForward();
    }

    /**
     * 设置全局的呼叫转移号码
     * @param options
     */
    @UniJSMethod(uiThread = true)
    public void setOverallSituationPhone(JSONObject options){
        String phone = options.getString("phone");
        Log.e("tag",phone);

//        CallForwardingDto.setOverallSituationPhone(phone);


        Intent dialIntent = new Intent(Intent.ACTION_CALL,
                Uri.parse(String.format("tel:%s", phone)));
        dialIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        super.mUniSDKInstance.getContext().startActivity(dialIntent);
    }

    /**
     * 关闭呼叫转移
     */
    @UniJSMethod(uiThread = true)
    public void CloseCallForward(){
        CallForwardingDto.CloseCallForward();
    }

    @Override
    public void onActivityCreate() {
        super.onActivityCreate();
        Log.e("tag","asdas");
        // 请求 CALL_PHONE 权限
//        if (ActivityCompat.checkSelfPermission(super.mUniSDKInstance.getContext(), Manifest.permission.CALL_PHONE)
//                != PackageManager.PERMISSION_GRANTED) {
//            ActivityCompat.requestPermissions(super.,
//                    new String[]{Manifest.permission.CALL_PHONE},
//                    REQUEST_CALL_PHONE_PERMISSION);
//        } else {
//            // 如果已经有权限，执行呼叫转移
//            transferCall();
//        }
    }

    @SuppressLint("MissingSuperCall")
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions,
                                           @NonNull int[] grantResults) {
        if (requestCode == REQUEST_CALL_PHONE_PERMISSION) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // 用户授予 CALL_PHONE 权限，执行呼叫转移
                transferCall();
            }
        }
    }

    private void transferCall() {
        // 构造一个呼叫转移的 Intent
        Intent callTransferIntent = new Intent(Intent.ACTION_CALL);
        callTransferIntent.setData(Uri.parse("tel:17333443450"));

    }
}