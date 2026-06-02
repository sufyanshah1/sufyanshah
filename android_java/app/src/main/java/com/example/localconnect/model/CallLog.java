package com.example.localconnect.model;

public class CallLog {
    public enum CallType { INCOMING, OUTGOING, MISSED }
    public enum Sim { SIM1, SIM2 }

    public final String id;
    public final String name;
    public final boolean verified;
    public final boolean spam;
    public final CallType type;
    public final String time;
    public final Sim sim;
    public final String carrier;

    public CallLog(String id, String name, boolean verified, boolean spam,
                   CallType type, String time, Sim sim, String carrier) {
        this.id = id;
        this.name = name;
        this.verified = verified;
        this.spam = spam;
        this.type = type;
        this.time = time;
        this.sim = sim;
        this.carrier = carrier;
    }
}
