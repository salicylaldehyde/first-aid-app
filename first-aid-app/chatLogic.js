// chatLogic.js
// chatLogic.js
function getAIResponse(message) {
    message = message.toLowerCase();

    // Core 5 Topics
    if (message.includes("bleeding")) {
        return "1. Apply firm pressure using a clean cloth.\n2. Elevate the wound.\n3. Call emergency services if bleeding continues.";
    }
    else if (message.includes("burn")) {
        return "1. Cool the burn under running water for 10–20 minutes.\n2. Do not apply ice or ointments.\n3. Cover loosely with a clean cloth.";
    }
    else if (message.includes("choking")) {
        return "1. Encourage coughing.\n2. Give 5 back blows.\n3. Give 5 abdominal thrusts.\n4. Call emergency services.";
    }
    else if (message.includes("cpr") || message.includes("not breathing")) {
        return "1. Check responsiveness.\n2. Call emergency services.\n3. Start CPR: 30 compressions, 2 breaths.";
    }
    else if (message.includes("fracture") || message.includes("broken")) {
        return "1. Keep the injured area still.\n2. Do not straighten the bone.\n3. Apply a cold pack.\n4. Seek medical help.";
    }
    
    // New Topic: Fainting
    else if (message.includes("faint") || message.includes("unconscious")) {
        return "1. Lie the person flat on their back and raise their legs 6–12 inches.\n2. Loosen tight clothing (collar, belt).\n3. Check for breathing.\n4. If they do not recover within 1 - 2 minutes, call emergency services (911/112/999).";
    }
    
    // New Topic: Allergic Reactions
    else if (message.includes("allergy") || message.includes("anaphylaxis") || message.includes("allergic reaction") ||
    message.includes("allergic")) {
        return "1. Immediately call emergency services.\n2. Use the person's auto-injector (EpiPen) if available, injecting into the mid-outer thigh. \n3. Assist with positioning (sitting if difficulty breathing; lying flat if dizzy/vomiting).\n4. If caused by a stinger, scrape it off with a firm object (do not use tweezers).";
    }
    
    // New Topic: Poisoning
    else if (message.includes("poison") || message.includes("swallow") || message.includes("inhale")) {
        return "1. Immediately call Poison Control or emergency services.\n2. Save the container/label to describe the substance.\n3. Swallowed: Do NOT induce vomiting unless instructed by a professional.\n4. Inhaled: Move the person to fresh air immediately.\n5. Skin/Eyes: Rinse the area with water for 15-20 minutes.";
    }
    
    // New Topic: Drowning
    else if (message.includes("drown") || message.includes("water")) {
        return "1. Safely pull the person out of the water (do not enter the water unless trained).\n2. Call emergency services.\n3. If they are not breathing, start CPR immediately, beginning with 5 initial rescue breaths.\n4. Roll onto side if vomiting. Remove wet clothes and cover to prevent hypothermia.\n5. MANDATORY HOSPITALIZATION: Even if recovered, they must go to a hospital.";
    }
    
    // Default Response
    else {
        return "Please mention symptoms like bleeding, burn, choking, CPR, fracture, allergic reaction, poisoning, or drowning.";
    }
}