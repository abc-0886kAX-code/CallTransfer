package com.anyu.callforwarding.dto;

import com.anyu.callforwarding.utils.StringUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * 呼叫转移DTO
 */
public class CallForwardingDto {
    /**
     * 对于单个号码进行呼叫转移
     */
    public static Map<String,String> phoneMap = new HashMap<>();
    /**
     * 对于所有号码进行呼叫转移
     */
    public static String phoneNumber = null;
    /**
     * 是否开启呼叫转移
     */
    public static Boolean CallForward = false;

    /**
     * 获取呼叫转移的号码
     * @param sourcePhone
     * @return
     */
    public static String getForwardingPhone(String sourcePhone){
        String phone = phoneMap.get(sourcePhone);
        if(StringUtils.isBlank(phone)){
            return phoneNumber;
        }
        return phone;
    }

    /**
     * 设置呼叫转移号码
     * @param sourcePhone
     * @param forwardingPhone
     */
    public static void setForwardingPhone(String sourcePhone,String forwardingPhone){
        phoneMap.put(sourcePhone,forwardingPhone);
    }

    /**
     * 设置全局的呼叫转移号码
     * @param forwardingPhone
     */
    public static void setOverallSituationPhone(String forwardingPhone){
        phoneNumber = forwardingPhone;
        CallForward = true;
    }

    /**
     * 查看是否开启呼叫转移
     * @return
     */
    public static Boolean getCallForward(){
        return CallForward;
    }

    /**
     * 开启呼叫转移
     */
    public static void OpenCallForward(){
        CallForward = true;
    }

    /**
     * 关闭呼叫转移
     */
    public static void CloseCallForward(){
        CallForward = true;
    }

}
