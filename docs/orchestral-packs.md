# Orchestral Packs Guide

## Required Orchestral Packs

The "Spiral Galaxy as Bach's Canon" project utilizes Ableton's orchestral packs to create a realistic orchestral palette. This project was developed using Ableton Live 12 Trial (Build: 2025-02-07_7b405e2e2b) and requires the following orchestral packs:

1. **Orchestral Brass**
2. **Orchestral Mallets** 
3. **Orchestral Strings**
4. **Orchestral Woodwinds**

## Obtaining the Orchestral Packs

### For Trial Users
The orchestral packs are available as part of the Ableton Live 12 Trial. When installing the trial version, ensure you select these packs during the installation process.

### For Licensed Users
If you have a licensed version of Ableton Live, you can download these packs from your Ableton account or through the Ableton Pack Manager within the application.

## Pack Contents & Usage

Each orchestral pack contains specific instruments used in our implementation:

### Orchestral Brass

Used for the "Middle Spiral" track, representing the middle region of spiral arms.

Key instruments:
- Trumpet Section (legato, staccato)
- Trombone Section
- French Horn Ensemble
- Brass Ensemble with various articulations

### Orchestral Mallets

Used for the "Star Clusters" track, representing concentrated star formations.

Key instruments:
- Vibraphone (standard, bowed)
- Marimba
- Glockenspiel
- Tubular Bells

### Orchestral Strings

Used for the "Inner Spiral" track, representing the inner arms of the galaxy.

Key instruments:
- Strings Ensemble legato
- Strings Ensemble staccato
- Strings Ensemble pizzicato
- Strings Ensemble tremolo

### Orchestral Woodwinds

Used for the "Outer Spiral" track, representing the outer regions of spiral arms.

Key instruments:
- Woodwinds Ensemble legato
- Concert Flute
- Clarinet
- Oboe

## Instrument URIs

Our implementation references these instruments using specific URIs. Here are the key URIs used:

```
"query:Synths#Instrument%20Rack:Piano%20&%20Keys:FileId_4838"  // Grand Piano
"query:Synths#Instrument%20Rack:Strings:FileId_9633"           // Strings Ensemble
"query:Synths#Instrument%20Rack:Brass:FileId_9387"             // Trumpet Section
"query:Synths#Instrument%20Rack:Winds:FileId_9557"             // Woodwinds Ensemble
"query:Synths#Instrument%20Rack:Mallets:FileId_9730"           // Vibraphone
"query:Synths#Instrument%20Rack:Pad:FileId_4935"               // Stars Pad
```

## Troubleshooting Pack Installation

If you encounter issues with the orchestral packs:

1. **Pack Not Found**: Ensure the packs are fully downloaded and installed
2. **Instrument Not Loading**: Try manually dragging the instrument into a track as a fallback
3. **URI Path Issues**: If URIs fail, use the Instrument Rack paths as described in implementation.js
4. **Missing Samples**: Verify that sample content is fully downloaded

## Alternative Approaches

If you don't have access to these exact orchestral packs, you can substitute with:

1. **Third-party VST orchestral libraries** (e.g., Spitfire Audio LABS, Orchestral Tools Sine Player free instruments)
2. **Standard Ableton instruments** with appropriate sound design
3. **Sample packs** with orchestral sounds

However, note that using alternative instruments will require modifying the instrument loading code in implementation.js.
