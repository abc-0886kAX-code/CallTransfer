package com.anyu.callforwarding.Enums;

import java.util.Objects;

public enum ForwardTypeEnum {
    UNCONDITIONAL("01","无条件呼叫转移"),
    BUSY("02","遇忙呼叫转移"),
    SHUTDOWN("03","无信号/关机/无应答呼叫转移"),
    OTHER("04","其他");
    private ForwardTypeEnum(String code,String desc){
        this.code = code;
        this.desc = desc;
    }
    private final String code;
    private final String desc;

    public String getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static ForwardTypeEnum getForwardTypeEnum(String code){
        for(ForwardTypeEnum forwardTypeEnum:values()){
            if(Objects.equals(code,forwardTypeEnum.getCode())){
                return forwardTypeEnum;
            }

        }
        return OTHER;
    }
}
