package com.example.localconnect.model;

public class Contact {
    public final String id;
    public final String name;
    public final boolean verified;
    public final boolean favorite;

    public Contact(String id, String name, boolean verified, boolean favorite) {
        this.id = id;
        this.name = name;
        this.verified = verified;
        this.favorite = favorite;
    }

    public String getInitial() {
        String trimmed = name == null ? "" : name.replaceAll("[^a-zA-Z ]", "").trim();
        return trimmed.isEmpty() ? "?" : String.valueOf(Character.toUpperCase(trimmed.charAt(0)));
    }
}
