package com.anyu.callforwarding;

import android.content.Context;
import android.telephony.PhoneStateListener;
import android.telephony.TelephonyManager;

import com.alibaba.fastjson.JSONObject;
import com.anyu.callforwarding.Enums.ForwardTypeEnum;
import com.anyu.callforwarding.exception.ParamsException;
import com.anyu.callforwarding.utils.AjaxResult;
import com.anyu.callforwarding.utils.PhoneCallForwardingUtils;
import com.anyu.callforwarding.utils.StringUtils;
import com.taobao.weex.bridge.JSCallback;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;

/**
 * 呼叫转移相关类
 */
public class CallTransferModule extends UniModule {
    Context context = super.mUniSDKInstance.getContext();
    /**
     * 设置呼叫转移
     * @param options
     * @param callback
     */
    @UniJSMethod(uiThread = true)
    public void setCallForward(JSONObject options, JSCallback callback){
        try{
            PhoneCallForwardingUtils.setCallPhone(context,options);
            /**
             * 是否开启呼叫转移
             */
            Boolean openForward = options.getBoolean("openforward");
            /**
             * 默认为无条件呼叫转移
             */
            if(openForward){
                String forwardtype = options.getString("forwardtype");
                if(StringUtils.isBlank(forwardtype)){
                    forwardtype = ForwardTypeEnum.UNCONDITIONAL.getCode();
                }
                options.put("forwardtype", forwardtype);
                PhoneCallForwardingUtils.startCallForwarding(context,options);
            }
        }catch (ParamsException e){
            callback.invoke(AjaxResult.error(e));
        }catch (Exception e){
            callback.invoke(AjaxResult.error(e));
        }
    }

    /**
     * 移除某个卡槽的设置信息,并且重置设置
     * @param options
     * @param callback
     */
    @UniJSMethod(uiThread = true)
    public void removeCallForward(JSONObject options, JSCallback callback){
        try{
            String forwardtype = options.getString("forwardtype");
            if(StringUtils.isBlank(forwardtype)){
                forwardtype = ForwardTypeEnum.OTHER.getCode();
            }
            options.put("forwardtype",forwardtype);
            PhoneCallForwardingUtils.stopCallForwarding(context,options);
            PhoneCallForwardingUtils.removeCallPhone(context,options);
        }catch (ParamsException e){
            callback.invoke(AjaxResult.error(e));
        }catch (Exception e){
            callback.invoke(AjaxResult.error(e));
        }
    }

    /**
     * 开启呼叫转移
     * @param options
     * @param callback
     */
    @UniJSMethod(uiThread = true)
    public void openCallForwarding(JSONObject options, JSCallback callback){
        try{
            PhoneCallForwardingUtils.startCallForwarding(context,options);
        }catch (ParamsException e){
            callback.invoke(AjaxResult.error(e));
        }catch (Exception e){
            callback.invoke(AjaxResult.error(e));
        }
    }

    /**
     * 停止
     * @param options
     * @param callback
     */
    @UniJSMethod(uiThread = true)
    public void stopCallForwarding(JSONObject options, JSCallback callback){
        try{
            PhoneCallForwardingUtils.stopCallForwarding(context,options);
        }catch (ParamsException e){
            callback.invoke(AjaxResult.error(e));
        }catch (Exception e){
            callback.invoke(AjaxResult.error(e));
        }
    }

    /**
     * 添加来电监听
     * @param jsCallback
     */
    public  void callTransferStateListener(JSCallback jsCallback){
        TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
        MyPhoneStateListener phoneStateListener = new MyPhoneStateListener(context);
        telephonyManager.listen(phoneStateListener, PhoneStateListener.LISTEN_CALL_STATE);
    }

}
