package com.anyu.callforwarding.Enums;

import java.util.Objects;

/**
 * 标识类
 */
public enum CallForwardingEnum {
    /**
     * 中国电信
     */
    C_NETWORK("72","中国电信","*72{}","*90{}","*92{}","*730","*720","*900","*920"),
    /**
     * 中国移动、中国联通
     */
    G_NETWORK("21","中国移动、中国联通","**21*{}#","**67*{}#","**62*{}#","##002#","##21#","##67#","##62#");
    private CallForwardingEnum(String code, String desc,String unconditionalForward,String busyForward,
                               String ShutdownForward,String cancelAllForward,String cancelUnconditionalForward,
                               String cancelBusyForward,String cancelShutdownForward){
        this.code = code;
        this.desc = desc;
        this.unconditionalForward = unconditionalForward;
        this.busyForward = busyForward;
        this.ShutdownForward = ShutdownForward;
        this.cancelAllForward = cancelAllForward;
        this.cancelUnconditionalForward = cancelUnconditionalForward;
        this.cancelBusyForward = cancelBusyForward;
        this.cancelShutdownForward = cancelShutdownForward;
    }

    /**
     * code
     */
    private final String code;
    /**
     * 名称
     */
    private final String desc;
    /**
     * 无条件呼叫转移
     */
    private final String unconditionalForward;
    /**
     * 遇忙呼叫转移
     */
    private final String busyForward;
    /**
     * 无信号/关机/无应答呼叫转移
     */
    private final String ShutdownForward;
    /**
     * 取消所有呼叫转移
     */
    private final String cancelAllForward;
    /**
     * 取消无条件呼叫转移
     */
    private final String cancelUnconditionalForward;
    /**
     * 取消遇忙呼叫转移
     */
    private final String cancelBusyForward;
    /**
     * 取消无信号/关机/无应答呼叫转移
     */
    private final String cancelShutdownForward;

    public String getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    /**
     * 获取运营商类型，默认G网
     * @param code
     * @return
     */
    public static CallForwardingEnum getCallForwardingEnum(String code){
        for(CallForwardingEnum callForwardingEnum:values()){
            if(Objects.equals(code,callForwardingEnum.getCode())){
                return callForwardingEnum;
            }

        }
        return G_NETWORK;
    }

    public String getUnconditionalForward(String phone) {
        return "tel"+String.format(unconditionalForward, phone);
    }

    public String getBusyForward(String phone) {
        return "tel"+String.format(busyForward, phone);
    }

    public String getShutdownForward(String phone) {
        return "tel"+String.format(ShutdownForward, phone);
    }

    public String getCancelAllForward() {
        return "tel"+cancelAllForward;
    }

    public String getCancelUnconditionalForward() {
        return "tel"+cancelUnconditionalForward;
    }

    public String getCancelBusyForward() {
        return "tel"+cancelBusyForward;
    }

    public String getCancelShutdownForward() {
        return "tel"+cancelShutdownForward;
    }
}
