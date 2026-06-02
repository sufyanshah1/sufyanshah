package com.example.localconnect.data;

import com.example.localconnect.model.CallLog;
import com.example.localconnect.model.CallLog.CallType;
import com.example.localconnect.model.CallLog.Sim;
import com.example.localconnect.model.Contact;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Static in-memory sample data mirroring src/components/local-connect/data.ts.
 * Use this for previews, demos, and unit tests until a real data source is wired in.
 */
public final class SampleData {

    private SampleData() {}

    public static final List<Contact> RECOMMENDED = Collections.unmodifiableList(Arrays.asList(
            new Contact("1", "Ayesha Khan",   true,  true),
            new Contact("2", "Bilal Ahmed",   false, false),
            new Contact("3", "Sana Malik",    true,  true),
            new Contact("4", "Hamza Sheikh",  true,  false),
            new Contact("5", "Zara Iqbal",    false, true),
            new Contact("6", "Usman Ali",     true,  false),
            new Contact("7", "Fatima Noor",   true,  true)
    ));

    public static final List<CallLog> CALL_LOGS = Collections.unmodifiableList(Arrays.asList(
            new CallLog("c1", "Ayesha Khan",                true,  false, CallType.INCOMING, "10:30 AM",    Sim.SIM1, "Jazz"),
            new CallLog("c2", "Unknown +92 300 1234567",    false, true,  CallType.MISSED,   "9:48 AM",     Sim.SIM2, "Zong"),
            new CallLog("c3", "Bilal Ahmed",                false, false, CallType.OUTGOING, "Yesterday",   Sim.SIM1, "Jazz"),
            new CallLog("c4", "Sana Malik",                 true,  false, CallType.INCOMING, "Yesterday",   Sim.SIM2, "Zong"),
            new CallLog("c5", "Office Reception",           false, false, CallType.MISSED,   "2 days ago",  Sim.SIM1, "Jazz"),
            new CallLog("c6", "Hamza Sheikh",               true,  false, CallType.OUTGOING, "2 days ago",  Sim.SIM2, "Zong"),
            new CallLog("c7", "Delivery Rider",             false, false, CallType.INCOMING, "3 days ago",  Sim.SIM1, "Jazz"),
            new CallLog("c8", "Zara Iqbal",                 false, false, CallType.OUTGOING, "3 days ago",  Sim.SIM2, "Zong"),
            new CallLog("c9", "Telemarketer",               false, true,  CallType.MISSED,   "4 days ago",  Sim.SIM1, "Jazz")
    ));

    public static List<Contact> getFavorites() {
        return RECOMMENDED.stream().filter(c -> c.favorite).collect(Collectors.toList());
    }

    public static List<CallLog> getMissed() {
        return CALL_LOGS.stream().filter(l -> l.type == CallType.MISSED).collect(Collectors.toList());
    }

    public static List<CallLog> getIncoming() {
        return CALL_LOGS.stream().filter(l -> l.type == CallType.INCOMING).collect(Collectors.toList());
    }

    public static List<CallLog> getOutgoing() {
        return CALL_LOGS.stream().filter(l -> l.type == CallType.OUTGOING).collect(Collectors.toList());
    }

    public static List<CallLog> getVerified() {
        return CALL_LOGS.stream().filter(l -> l.verified).collect(Collectors.toList());
    }
}
