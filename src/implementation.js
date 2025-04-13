/**
 * Spiral Galaxy as Bach's Canon - Optimized Implementation
 * 
 * This implementation creates a musical composition based on the mathematical structure
 * of spiral galaxies using Bach's canonical techniques. The composition is designed
 * for Ableton Live using MCP (Model Context Protocol) and features a three-part 
 * structure (Exposition, Development, Culmination) across six instrument tracks 
 * representing different elements of a spiral galaxy.
 * 
 * Implementation leverages Ableton MCP for programmatic control.
 * See: https://github.com/ahujasid/ableton-mcp
 * 
 * Developed and tested with:
 * - Ableton Live 12 Trial (Build: 2025-02-07_7b405e2e2b)
 * - Standard Ableton orchestral packs (Brass, Mallets, Strings, Woodwinds)
 */

// Main function to set up and create the entire composition
function createSpiralGalaxyCanon() {
  // Set up session with tracks and instruments
  setupSession();
  
  // Create unified clips for each track
  createUnifiedClips();
  
  // Populate each track with notes for all three sections
  populateGalacticCoreTrack();
  populateInnerSpiralTrack();
  populateMiddleSpiralTrack();
  populateOuterSpiralTrack();
  populateStarClustersTrack();
  populateCosmicBackgroundTrack();
  
  // Start playback of all tracks
  startPlayback();
}

// Function to create all tracks and set up the basic session
function setupSession() {
  // Set tempo
  set_tempo(tempo=72);
  
  // Create and name tracks
  const trackNames = [
    "Galactic Core", "Inner Spiral", "Middle Spiral", 
    "Outer Spiral", "Star Clusters", "Cosmic Background"
  ];
  
  // Create and set up each track
  trackNames.forEach((name, index) => {
    create_midi_track(index);
    set_track_name(track_index=index, name=name);
  });
  
  // Load instruments for each track
  const instruments = [
    "query:Synths#Instrument%20Rack:Piano%20&%20Keys:FileId_4838",  // Grand Piano
    "query:Synths#Instrument%20Rack:Strings:FileId_9633",           // Strings Ensemble
    "query:Synths#Instrument%20Rack:Brass:FileId_9387",             // Trumpet Section
    "query:Synths#Instrument%20Rack:Winds:FileId_9557",             // Woodwinds Ensemble
    "query:Synths#Instrument%20Rack:Mallets:FileId_9730",           // Vibraphone
    "query:Synths#Instrument%20Rack:Pad:FileId_4935"                // Stars Pad
  ];
  
  // Load each instrument
  instruments.forEach((uri, index) => {
    load_instrument_or_effect(track_index=index, uri=uri);
  });
}

// Function to create longer clips for each track
function createUnifiedClips() {
  const trackCount = 6;
  const clipLength = 96; // 3 sections of 32 bars each
  
  const clipNames = [
    "Galactic Core Full Composition",
    "Inner Spiral Full Composition",
    "Middle Spiral Full Composition",
    "Outer Spiral Full Composition",
    "Star Clusters Full Composition",
    "Cosmic Background Full Composition"
  ];
  
  // Create clips for all tracks
  for (let trackIndex = 0; trackIndex < trackCount; trackIndex++) {
    create_clip(track_index=trackIndex, clip_index=0, length=clipLength);
    set_clip_name(track_index=trackIndex, clip_index=0, name=clipNames[trackIndex]);
  }
}

// Function to offset notes for a specific section
function offsetNotesForSection(notes, sectionOffset) {
  return notes.map(note => {
    return {
      ...note,
      start_time: note.start_time + sectionOffset
    };
  });
}

// Function to batch add notes in smaller chunks to avoid API limits
function addNotesInBatches(trackIndex, clipIndex, allNotes, batchSize = 30) {
  for (let i = 0; i < allNotes.length; i += batchSize) {
    const batch = allNotes.slice(i, i + batchSize);
    add_notes_to_clip(track_index=trackIndex, clip_index=clipIndex, notes=batch);
  }
}

// ======= TRACK POPULATION FUNCTIONS =======

// Function to populate the Galactic Core (piano) track
function populateGalacticCoreTrack() {
  const trackIndex = 0;
  const clipIndex = 0;
  
  // Get notes for each section
  const expositionNotes = getGalacticCoreExpositionNotes();
  const developmentNotes = getGalacticCoreDevelopmentNotes();
  const culminationNotes = getGalacticCoreCulminationNotes();
  
  // Apply time offsets to development and culmination sections
  const offsetDevelopmentNotes = offsetNotesForSection(developmentNotes, 32);
  const offsetCulminationNotes = offsetNotesForSection(culminationNotes, 64);
  
  // Combine all notes
  const allNotes = [
    ...expositionNotes,
    ...offsetDevelopmentNotes,
    ...offsetCulminationNotes
  ];
  
  // Add notes to clip in batches
  addNotesInBatches(trackIndex, clipIndex, allNotes);
}

// Function to populate the Inner Spiral (strings) track
function populateInnerSpiralTrack() {
  const trackIndex = 1;
  const clipIndex = 0;
  
  // Get notes for each section
  const expositionNotes = getInnerSpiralExpositionNotes();
  const developmentNotes = getInnerSpiralDevelopmentNotes();
  const culminationNotes = getInnerSpiralCulminationNotes();
  
  // Apply time offsets to development and culmination sections
  const offsetDevelopmentNotes = offsetNotesForSection(developmentNotes, 32);
  const offsetCulminationNotes = offsetNotesForSection(culminationNotes, 64);
  
  // Combine all notes
  const allNotes = [
    ...expositionNotes,
    ...offsetDevelopmentNotes,
    ...offsetCulminationNotes
  ];
  
  // Add notes to clip in batches
  addNotesInBatches(trackIndex, clipIndex, allNotes);
}

// Function to populate the Middle Spiral (trumpets) track
function populateMiddleSpiralTrack() {
  const trackIndex = 2;
  const clipIndex = 0;
  
  // Get notes for each section
  const expositionNotes = getMiddleSpiralExpositionNotes();
  const developmentNotes = getMiddleSpiralDevelopmentNotes();
  const culminationNotes = getMiddleSpiralCulminationNotes();
  
  // Apply time offsets to development and culmination sections
  const offsetDevelopmentNotes = offsetNotesForSection(developmentNotes, 32);
  const offsetCulminationNotes = offsetNotesForSection(culminationNotes, 64);
  
  // Combine all notes
  const allNotes = [
    ...expositionNotes,
    ...offsetDevelopmentNotes,
    ...offsetCulminationNotes
  ];
  
  // Add notes to clip in batches
  addNotesInBatches(trackIndex, clipIndex, allNotes);
}

// Function to populate the Outer Spiral (woodwinds) track
function populateOuterSpiralTrack() {
  const trackIndex = 3;
  const clipIndex = 0;
  
  // Get notes for each section
  const expositionNotes = getOuterSpiralExpositionNotes();
  const developmentNotes = getOuterSpiralDevelopmentNotes();
  const culminationNotes = getOuterSpiralCulminationNotes();
  
  // Apply time offsets to development and culmination sections
  const offsetDevelopmentNotes = offsetNotesForSection(developmentNotes, 32);
  const offsetCulminationNotes = offsetNotesForSection(culminationNotes, 64);
  
  // Combine all notes
  const allNotes = [
    ...expositionNotes,
    ...offsetDevelopmentNotes,
    ...offsetCulminationNotes
  ];
  
  // Add notes to clip in batches
  addNotesInBatches(trackIndex, clipIndex, allNotes);
}

// Function to populate the Star Clusters (vibraphone) track
function populateStarClustersTrack() {
  const trackIndex = 4;
  const clipIndex = 0;
  
  // Get notes for each section
  const expositionNotes = getStarClustersExpositionNotes();
  const developmentNotes = getStarClustersDevelopmentNotes();
  const culminationNotes = getStarClustersCulminationNotes();
  
  // Apply time offsets to development and culmination sections
  const offsetDevelopmentNotes = offsetNotesForSection(developmentNotes, 32);
  const offsetCulminationNotes = offsetNotesForSection(culminationNotes, 64);
  
  // Combine all notes
  const allNotes = [
    ...expositionNotes,
    ...offsetDevelopmentNotes,
    ...offsetCulminationNotes
  ];
  
  // Add notes to clip in batches
  addNotesInBatches(trackIndex, clipIndex, allNotes);
}

// Function to populate the Cosmic Background (pad) track
function populateCosmicBackgroundTrack() {
  const trackIndex = 5;
  const clipIndex = 0;
  
  // Get notes for each section
  const expositionNotes = getCosmicBackgroundExpositionNotes();
  const developmentNotes = getCosmicBackgroundDevelopmentNotes();
  const culminationNotes = getCosmicBackgroundCulminationNotes();
  
  // Apply time offsets to development and culmination sections
  const offsetDevelopmentNotes = offsetNotesForSection(developmentNotes, 32);
  const offsetCulminationNotes = offsetNotesForSection(culminationNotes, 64);
  
  // Combine all notes
  const allNotes = [
    ...expositionNotes,
    ...offsetDevelopmentNotes,
    ...offsetCulminationNotes
  ];
  
  // Add notes to clip in batches
  addNotesInBatches(trackIndex, clipIndex, allNotes);
}

// Function to start playback of all clips
function startPlayback() {
  // Fire all clips to start playback
  for (let trackIndex = 0; trackIndex < 6; trackIndex++) {
    fire_clip(track_index=trackIndex, clip_index=0);
  }
}

// ======= NOTE PATTERN DEFINITIONS =======
// These functions contain the exact note patterns from the original composition
// to maintain Bach's canonical structure, while allowing for code optimization

// --- GALACTIC CORE (PIANO) NOTE PATTERNS ---

// Exposition section for Galactic Core
function getGalacticCoreExpositionNotes() {
  return [
    {"mute": false, "pitch": 60, "duration": 2, "velocity": 90, "start_time": 0},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 75, "start_time": 1},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 80, "start_time": 2},
    {"mute": false, "pitch": 72, "duration": 1, "velocity": 70, "start_time": 3},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 85, "start_time": 4},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 75, "start_time": 5},
    {"mute": false, "pitch": 60, "duration": 2, "velocity": 83, "start_time": 6},
    {"mute": false, "pitch": 62, "duration": 2, "velocity": 88, "start_time": 8},
    {"mute": false, "pitch": 65, "duration": 2, "velocity": 75, "start_time": 9},
    {"mute": false, "pitch": 69, "duration": 2, "velocity": 80, "start_time": 10},
    {"mute": false, "pitch": 74, "duration": 1, "velocity": 70, "start_time": 11},
    {"mute": false, "pitch": 69, "duration": 2, "velocity": 85, "start_time": 12},
    {"mute": false, "pitch": 65, "duration": 2, "velocity": 75, "start_time": 13},
    {"mute": false, "pitch": 62, "duration": 2, "velocity": 83, "start_time": 14},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 90, "start_time": 16},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 75, "start_time": 17},
    {"mute": false, "pitch": 71, "duration": 2, "velocity": 80, "start_time": 18},
    {"mute": false, "pitch": 76, "duration": 1, "velocity": 70, "start_time": 19},
    {"mute": false, "pitch": 71, "duration": 2, "velocity": 85, "start_time": 20},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 75, "start_time": 21},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 83, "start_time": 22},
    {"mute": false, "pitch": 60, "duration": 2, "velocity": 95, "start_time": 24},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 80, "start_time": 25},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 85, "start_time": 26},
    {"mute": false, "pitch": 72, "duration": 1, "velocity": 75, "start_time": 27},
    {"mute": false, "pitch": 76, "duration": 2, "velocity": 90, "start_time": 28},
    {"mute": false, "pitch": 72, "duration": 2, "velocity": 80, "start_time": 29},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 88, "start_time": 30}
  ];
}

// Development section for Galactic Core
function getGalacticCoreDevelopmentNotes() {
  return [
    {"mute": false, "pitch": 60, "duration": 0.5, "velocity": 90, "start_time": 0},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 80, "start_time": 0.5},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 85, "start_time": 1},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 75, "start_time": 1.5},
    {"mute": false, "pitch": 60, "duration": 0.5, "velocity": 90, "start_time": 2},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 80, "start_time": 2.5},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 85, "start_time": 3},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 75, "start_time": 3.5},
    {"mute": false, "pitch": 62, "duration": 0.5, "velocity": 90, "start_time": 4},
    {"mute": false, "pitch": 69, "duration": 0.5, "velocity": 80, "start_time": 4.5},
    {"mute": false, "pitch": 74, "duration": 0.5, "velocity": 85, "start_time": 5},
    {"mute": false, "pitch": 69, "duration": 0.5, "velocity": 75, "start_time": 5.5},
    {"mute": false, "pitch": 62, "duration": 0.5, "velocity": 90, "start_time": 6},
    {"mute": false, "pitch": 69, "duration": 0.5, "velocity": 80, "start_time": 6.5},
    {"mute": false, "pitch": 74, "duration": 0.5, "velocity": 85, "start_time": 7},
    {"mute": false, "pitch": 69, "duration": 0.5, "velocity": 75, "start_time": 7.5},
    {"mute": false, "pitch": 64, "duration": 0.5, "velocity": 90, "start_time": 8},
    {"mute": false, "pitch": 71, "duration": 0.5, "velocity": 80, "start_time": 8.5},
    {"mute": false, "pitch": 76, "duration": 0.5, "velocity": 85, "start_time": 9},
    {"mute": false, "pitch": 71, "duration": 0.5, "velocity": 75, "start_time": 9.5},
    {"mute": false, "pitch": 64, "duration": 0.5, "velocity": 90, "start_time": 10},
    {"mute": false, "pitch": 71, "duration": 0.5, "velocity": 80, "start_time": 10.5},
    {"mute": false, "pitch": 76, "duration": 0.5, "velocity": 85, "start_time": 11},
    {"mute": false, "pitch": 71, "duration": 0.5, "velocity": 75, "start_time": 11.5},
    {"mute": false, "pitch": 65, "duration": 0.5, "velocity": 90, "start_time": 12},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 80, "start_time": 12.5},
    {"mute": false, "pitch": 77, "duration": 0.5, "velocity": 85, "start_time": 13},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 75, "start_time": 13.5},
    {"mute": false, "pitch": 65, "duration": 0.5, "velocity": 90, "start_time": 14},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 80, "start_time": 14.5},
    {"mute": false, "pitch": 77, "duration": 0.5, "velocity": 85, "start_time": 15},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 75, "start_time": 15.5},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 95, "start_time": 16},
    {"mute": false, "pitch": 74, "duration": 0.5, "velocity": 85, "start_time": 16.5},
    {"mute": false, "pitch": 79, "duration": 0.5, "velocity": 90, "start_time": 17},
    {"mute": false, "pitch": 74, "duration": 0.5, "velocity": 80, "start_time": 17.5},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 95, "start_time": 18},
    {"mute": false, "pitch": 74, "duration": 0.5, "velocity": 85, "start_time": 18.5},
    {"mute": false, "pitch": 79, "duration": 0.5, "velocity": 90, "start_time": 19},
    {"mute": false, "pitch": 74, "duration": 0.5, "velocity": 80, "start_time": 19.5},
    {"mute": false, "pitch": 65, "duration": 0.5, "velocity": 90, "start_time": 20},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 80, "start_time": 20.5},
    {"mute": false, "pitch": 77, "duration": 0.5, "velocity": 85, "start_time": 21},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 75, "start_time": 21.5},
    {"mute": false, "pitch": 65, "duration": 0.5, "velocity": 90, "start_time": 22},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 80, "start_time": 22.5},
    {"mute": false, "pitch": 77, "duration": 0.5, "velocity": 85, "start_time": 23},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 75, "start_time": 23.5},
    {"mute": false, "pitch": 64, "duration": 0.5, "velocity": 95, "start_time": 24},
    {"mute": false, "pitch": 71, "duration": 0.5, "velocity": 85, "start_time": 24.5},
    {"mute": false, "pitch": 76, "duration": 0.5, "velocity": 90, "start_time": 25},
    {"mute": false, "pitch": 71, "duration": 0.5, "velocity": 80, "start_time": 25.5},
    {"mute": false, "pitch": 64, "duration": 0.5, "velocity": 95, "start_time": 26},
    {"mute": false, "pitch": 71, "duration": 0.5, "velocity": 85, "start_time": 26.5},
    {"mute": false, "pitch": 76, "duration": 0.5, "velocity": 90, "start_time": 27},
    {"mute": false, "pitch": 71, "duration": 0.5, "velocity": 80, "start_time": 27.5},
    {"mute": false, "pitch": 60, "duration": 0.5, "velocity": 100, "start_time": 28},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 90, "start_time": 28.5},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 95, "start_time": 29},
    {"mute": false, "pitch": 76, "duration": 0.5, "velocity": 85, "start_time": 29.5},
    {"mute": false, "pitch": 79, "duration": 0.5, "velocity": 100, "start_time": 30},
    {"mute": false, "pitch": 84, "duration": 1.5, "velocity": 90, "start_time": 30.5}
  ];
}

// Culmination section for Galactic Core
function getGalacticCoreCulminationNotes() {
  return [
    {"mute": false, "pitch": 48, "duration": 4, "velocity": 100, "start_time": 0},
    {"mute": false, "pitch": 55, "duration": 4, "velocity": 95, "start_time": 0},
    {"mute": false, "pitch": 60, "duration": 4, "velocity": 95, "start_time": 0},
    {"mute": false, "pitch": 64, "duration": 4, "velocity": 95, "start_time": 0},
    {"mute": false, "pitch": 50, "duration": 4, "velocity": 95, "start_time": 4},
    {"mute": false, "pitch": 57, "duration": 4, "velocity": 90, "start_time": 4},
    {"mute": false, "pitch": 62, "duration": 4, "velocity": 90, "start_time": 4},
    {"mute": false, "pitch": 65, "duration": 4, "velocity": 90, "start_time": 4},
    {"mute": false, "pitch": 52, "duration": 4, "velocity": 100, "start_time": 8},
    {"mute": false, "pitch": 59, "duration": 4, "velocity": 95, "start_time": 8},
    {"mute": false, "pitch": 64, "duration": 4, "velocity": 95, "start_time": 8},
    {"mute": false, "pitch": 67, "duration": 4, "velocity": 95, "start_time": 8},
    {"mute": false, "pitch": 53, "duration": 4, "velocity": 95, "start_time": 12},
    {"mute": false, "pitch": 60, "duration": 4, "velocity": 90, "start_time": 12},
    {"mute": false, "pitch": 65, "duration": 4, "velocity": 90, "start_time": 12},
    {"mute": false, "pitch": 69, "duration": 4, "velocity": 90, "start_time": 12},
    {"mute": false, "pitch": 55, "duration": 4, "velocity": 105, "start_time": 16},
    {"mute": false, "pitch": 62, "duration": 4, "velocity": 100, "start_time": 16},
    {"mute": false, "pitch": 67, "duration": 4, "velocity": 100, "start_time": 16},
    {"mute": false, "pitch": 71, "duration": 4, "velocity": 100, "start_time": 16},
    {"mute": false, "pitch": 53, "duration": 4, "velocity": 100, "start_time": 20},
    {"mute": false, "pitch": 60, "duration": 4, "velocity": 95, "start_time": 20},
    {"mute": false, "pitch": 65, "duration": 4, "velocity": 95, "start_time": 20},
    {"mute": false, "pitch": 69, "duration": 4, "velocity": 95, "start_time": 20},
    {"mute": false, "pitch": 52, "duration": 4, "velocity": 100, "start_time": 24},
    {"mute": false, "pitch": 59, "duration": 4, "velocity": 95, "start_time": 24},
    {"mute": false, "pitch": 64, "duration": 4, "velocity": 95, "start_time": 24},
    {"mute": false, "pitch": 67, "duration": 4, "velocity": 95, "start_time": 24},
    {"mute": false, "pitch": 48, "duration": 8, "velocity": 110, "start_time": 28},
    {"mute": false, "pitch": 55, "duration": 8, "velocity": 105, "start_time": 28},
    {"mute": false, "pitch": 60, "duration": 8, "velocity": 105, "start_time": 28},
    {"mute": false, "pitch": 64, "duration": 8, "velocity": 105, "start_time": 28},
    {"mute": false, "pitch": 67, "duration": 8, "velocity": 105, "start_time": 28},
    {"mute": false, "pitch": 72, "duration": 8, "velocity": 105, "start_time": 28}
  ];
}

// --- INNER SPIRAL (STRINGS) NOTE PATTERNS ---

// Exposition section for Inner Spiral
function getInnerSpiralExpositionNotes() {
  return [
    {"mute": false, "pitch": 48, "duration": 8, "velocity": 60, "start_time": 0},
    {"mute": false, "pitch": 52, "duration": 8, "velocity": 60, "start_time": 0},
    {"mute": false, "pitch": 55, "duration": 8, "velocity": 60, "start_time": 0},
    {"mute": false, "pitch": 50, "duration": 8, "velocity": 65, "start_time": 8},
    {"mute": false, "pitch": 53, "duration": 8, "velocity": 65, "start_time": 8},
    {"mute": false, "pitch": 57, "duration": 8, "velocity": 65, "start_time": 8},
    {"mute": false, "pitch": 52, "duration": 8, "velocity": 70, "start_time": 16},
    {"mute": false, "pitch": 55, "duration": 8, "velocity": 70, "start_time": 16},
    {"mute": false, "pitch": 59, "duration": 8, "velocity": 70, "start_time": 16},
    {"mute": false, "pitch": 48, "duration": 8, "velocity": 75, "start_time": 24},
    {"mute": false, "pitch": 55, "duration": 8, "velocity": 75, "start_time": 24},
    {"mute": false, "pitch": 60, "duration": 8, "velocity": 75, "start_time": 24}
  ];
}

// Development section for Inner Spiral
function getInnerSpiralDevelopmentNotes() {
  return [
    {"mute": false, "pitch": 36, "duration": 4, "velocity": 70, "start_time": 0},
    {"mute": false, "pitch": 48, "duration": 4, "velocity": 65, "start_time": 0},
    {"mute": false, "pitch": 55, "duration": 4, "velocity": 65, "start_time": 0},
    {"mute": false, "pitch": 38, "duration": 4, "velocity": 70, "start_time": 4},
    {"mute": false, "pitch": 50, "duration": 4, "velocity": 65, "start_time": 4},
    {"mute": false, "pitch": 57, "duration": 4, "velocity": 65, "start_time": 4},
    {"mute": false, "pitch": 40, "duration": 4, "velocity": 70, "start_time": 8},
    {"mute": false, "pitch": 52, "duration": 4, "velocity": 65, "start_time": 8},
    {"mute": false, "pitch": 59, "duration": 4, "velocity": 65, "start_time": 8},
    {"mute": false, "pitch": 41, "duration": 4, "velocity": 70, "start_time": 12},
    {"mute": false, "pitch": 53, "duration": 4, "velocity": 65, "start_time": 12},
    {"mute": false, "pitch": 60, "duration": 4, "velocity": 65, "start_time": 12},
    {"mute": false, "pitch": 43, "duration": 4, "velocity": 75, "start_time": 16},
    {"mute": false, "pitch": 55, "duration": 4, "velocity": 70, "start_time": 16},
    {"mute": false, "pitch": 62, "duration": 4, "velocity": 70, "start_time": 16},
    {"mute": false, "pitch": 41, "duration": 4, "velocity": 75, "start_time": 20},
    {"mute": false, "pitch": 53, "duration": 4, "velocity": 70, "start_time": 20},
    {"mute": false, "pitch": 60, "duration": 4, "velocity": 70, "start_time": 20},
    {"mute": false, "pitch": 40, "duration": 4, "velocity": 75, "start_time": 24},
    {"mute": false, "pitch": 52, "duration": 4, "velocity": 70, "start_time": 24},
    {"mute": false, "pitch": 59, "duration": 4, "velocity": 70, "start_time": 24},
    {"mute": false, "pitch": 36, "duration": 4, "velocity": 80, "start_time": 28},
    {"mute": false, "pitch": 48, "duration": 4, "velocity": 75, "start_time": 28},
    {"mute": false, "pitch": 55, "duration": 4, "velocity": 75, "start_time": 28},
    {"mute": false, "pitch": 60, "duration": 4, "velocity": 75, "start_time": 28}
  ];
}

// Culmination section for Inner Spiral
function getInnerSpiralCulminationNotes() {
  return [
    {"mute": false, "pitch": 36, "duration": 8, "velocity": 80, "start_time": 0},
    {"mute": false, "pitch": 43, "duration": 8, "velocity": 75, "start_time": 0},
    {"mute": false, "pitch": 48, "duration": 8, "velocity": 75, "start_time": 0},
    {"mute": false, "pitch": 38, "duration": 8, "velocity": 80, "start_time": 8},
    {"mute": false, "pitch": 45, "duration": 8, "velocity": 75, "start_time": 8},
    {"mute": false, "pitch": 50, "duration": 8, "velocity": 75, "start_time": 8},
    {"mute": false, "pitch": 40, "duration": 8, "velocity": 85, "start_time": 16},
    {"mute": false, "pitch": 47, "duration": 8, "velocity": 80, "start_time": 16},
    {"mute": false, "pitch": 52, "duration": 8, "velocity": 80, "start_time": 16},
    {"mute": false, "pitch": 36, "duration": 4, "velocity": 90, "start_time": 24},
    {"mute": false, "pitch": 43, "duration": 4, "velocity": 85, "start_time": 24},
    {"mute": false, "pitch": 48, "duration": 4, "velocity": 85, "start_time": 24},
    {"mute": false, "pitch": 38, "duration": 2, "velocity": 90, "start_time": 28},
    {"mute": false, "pitch": 45, "duration": 2, "velocity": 85, "start_time": 28},
    {"mute": false, "pitch": 50, "duration": 2, "velocity": 85, "start_time": 28},
    {"mute": false, "pitch": 36, "duration": 2, "velocity": 95, "start_time": 30},
    {"mute": false, "pitch": 43, "duration": 2, "velocity": 90, "start_time": 30},
    {"mute": false, "pitch": 48, "duration": 2, "velocity": 90, "start_time": 30},
    {"mute": false, "pitch": 55, "duration": 2, "velocity": 90, "start_time": 30}
  ];
}

// --- MIDDLE SPIRAL (TRUMPETS) NOTE PATTERNS ---

// Exposition section for Middle Spiral
function getMiddleSpiralExpositionNotes() {
  return [
    {"mute": false, "pitch": 67, "duration": 1, "velocity": 85, "start_time": 4},
    {"mute": false, "pitch": 64, "duration": 1, "velocity": 80, "start_time": 6},
    {"mute": false, "pitch": 60, "duration": 1.5, "velocity": 90, "start_time": 8},
    {"mute": false, "pitch": 69, "duration": 1, "velocity": 85, "start_time": 12},
    {"mute": false, "pitch": 65, "duration": 1, "velocity": 80, "start_time": 14},
    {"mute": false, "pitch": 62, "duration": 1.5, "velocity": 90, "start_time": 16},
    {"mute": false, "pitch": 71, "duration": 1, "velocity": 85, "start_time": 20},
    {"mute": false, "pitch": 67, "duration": 1, "velocity": 80, "start_time": 22},
    {"mute": false, "pitch": 64, "duration": 1.5, "velocity": 95, "start_time": 24},
    {"mute": false, "pitch": 72, "duration": 1, "velocity": 90, "start_time": 28},
    {"mute": false, "pitch": 67, "duration": 1, "velocity": 85, "start_time": 30}
  ];
}

// Development section for Middle Spiral
function getMiddleSpiralDevelopmentNotes() {
  return [
    {"mute": false, "pitch": 55, "duration": 2, "velocity": 85, "start_time": 0},
    {"mute": false, "pitch": 57, "duration": 2, "velocity": 80, "start_time": 2},
    {"mute": false, "pitch": 55, "duration": 1, "velocity": 85, "start_time": 4},
    {"mute": false, "pitch": 60, "duration": 3, "velocity": 90, "start_time": 5},
    {"mute": false, "pitch": 57, "duration": 2, "velocity": 85, "start_time": 8},
    {"mute": false, "pitch": 59, "duration": 2, "velocity": 80, "start_time": 10},
    {"mute": false, "pitch": 57, "duration": 1, "velocity": 85, "start_time": 12},
    {"mute": false, "pitch": 62, "duration": 3, "velocity": 90, "start_time": 13},
    {"mute": false, "pitch": 59, "duration": 2, "velocity": 85, "start_time": 16},
    {"mute": false, "pitch": 62, "duration": 2, "velocity": 85, "start_time": 18},
    {"mute": false, "pitch": 59, "duration": 1, "velocity": 90, "start_time": 20},
    {"mute": false, "pitch": 64, "duration": 3, "velocity": 95, "start_time": 21},
    {"mute": false, "pitch": 62, "duration": 1, "velocity": 90, "start_time": 24},
    {"mute": false, "pitch": 67, "duration": 1, "velocity": 95, "start_time": 25},
    {"mute": false, "pitch": 64, "duration": 1, "velocity": 90, "start_time": 26},
    {"mute": false, "pitch": 60, "duration": 1, "velocity": 85, "start_time": 27},
    {"mute": false, "pitch": 55, "duration": 0.75, "velocity": 95, "start_time": 28},
    {"mute": false, "pitch": 60, "duration": 0.75, "velocity": 95, "start_time": 28.75},
    {"mute": false, "pitch": 64, "duration": 0.75, "velocity": 95, "start_time": 29.5},
    {"mute": false, "pitch": 67, "duration": 1.75, "velocity": 100, "start_time": 30.25}
  ];
}

// Culmination section for Middle Spiral
function getMiddleSpiralCulminationNotes() {
  return [
    {"mute": false, "pitch": 60, "duration": 2, "velocity": 100, "start_time": 0},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 95, "start_time": 0},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 95, "start_time": 0},
    {"mute": false, "pitch": 60, "duration": 2, "velocity": 95, "start_time": 4},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 90, "start_time": 4},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 90, "start_time": 4},
    {"mute": false, "pitch": 62, "duration": 2, "velocity": 100, "start_time": 8},
    {"mute": false, "pitch": 65, "duration": 2, "velocity": 95, "start_time": 8},
    {"mute": false, "pitch": 69, "duration": 2, "velocity": 95, "start_time": 8},
    {"mute": false, "pitch": 62, "duration": 2, "velocity": 95, "start_time": 12},
    {"mute": false, "pitch": 65, "duration": 2, "velocity": 90, "start_time": 12},
    {"mute": false, "pitch": 69, "duration": 2, "velocity": 90, "start_time": 12},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 105, "start_time": 16},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 100, "start_time": 16},
    {"mute": false, "pitch": 71, "duration": 2, "velocity": 100, "start_time": 16},
    {"mute": false, "pitch": 64, "duration": 2, "velocity": 100, "start_time": 20},
    {"mute": false, "pitch": 67, "duration": 2, "velocity": 95, "start_time": 20},
    {"mute": false, "pitch": 71, "duration": 2, "velocity": 95, "start_time": 20},
    {"mute": false, "pitch": 60, "duration": 1, "velocity": 105, "start_time": 24},
    {"mute": false, "pitch": 64, "duration": 1, "velocity": 100, "start_time": 24},
    {"mute": false, "pitch": 67, "duration": 1, "velocity": 100, "start_time": 24},
    {"mute": false, "pitch": 60, "duration": 1, "velocity": 95, "start_time": 26},
    {"mute": false, "pitch": 64, "duration": 1, "velocity": 90, "start_time": 26},
    {"mute": false, "pitch": 67, "duration": 1, "velocity": 90, "start_time": 26},
    {"mute": false, "pitch": 60, "duration": 0.5, "velocity": 110, "start_time": 28},
    {"mute": false, "pitch": 64, "duration": 0.5, "velocity": 105, "start_time": 28},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 105, "start_time": 28},
    {"mute": false, "pitch": 60, "duration": 0.5, "velocity": 105, "start_time": 29},
    {"mute": false, "pitch": 64, "duration": 0.5, "velocity": 100, "start_time": 29},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 100, "start_time": 29},
    {"mute": false, "pitch": 60, "duration": 0.5, "velocity": 110, "start_time": 30},
    {"mute": false, "pitch": 64, "duration": 0.5, "velocity": 105, "start_time": 30},
    {"mute": false, "pitch": 67, "duration": 0.5, "velocity": 105, "start_time": 30},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 105, "start_time": 30},
    {"mute": false, "pitch": 60, "duration": 1.5, "velocity": 115, "start_time": 30.5},
    {"mute": false, "pitch": 64, "duration": 1.5, "velocity": 110, "start_time": 30.5},
    {"mute": false, "pitch": 67, "duration": 1.5, "velocity": 110, "start_time": 30.5},
    {"mute": false, "pitch": 72, "duration": 1.5, "velocity": 110, "start_time": 30.5}
  ];
}

// --- OUTER SPIRAL (WOODWINDS) NOTE PATTERNS ---

// Exposition section for Outer Spiral
function getOuterSpiralExpositionNotes() {
  return [
    {"mute": false, "pitch": 72, "duration": 0.25, "velocity": 75, "start_time": 1},
    {"mute": false, "pitch": 76, "duration": 0.25, "velocity": 75, "start_time": 1.25},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 75, "start_time": 1.5},
    {"mute": false, "pitch": 84, "duration": 0.5, "velocity": 80, "start_time": 1.75},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 70, "start_time": 2.25},
    {"mute": false, "pitch": 76, "duration": 0.25, "velocity": 70, "start_time": 2.5},
    {"mute": false, "pitch": 72, "duration": 0.25, "velocity": 70, "start_time": 2.75},
    {"mute": false, "pitch": 74, "duration": 0.25, "velocity": 75, "start_time": 9},
    {"mute": false, "pitch": 77, "duration": 0.25, "velocity": 75, "start_time": 9.25},
    {"mute": false, "pitch": 81, "duration": 0.25, "velocity": 75, "start_time": 9.5},
    {"mute": false, "pitch": 86, "duration": 0.5, "velocity": 80, "start_time": 9.75},
    {"mute": false, "pitch": 81, "duration": 0.25, "velocity": 70, "start_time": 10.25},
    {"mute": false, "pitch": 77, "duration": 0.25, "velocity": 70, "start_time": 10.5},
    {"mute": false, "pitch": 74, "duration": 0.25, "velocity": 70, "start_time": 10.75},
    {"mute": false, "pitch": 76, "duration": 0.25, "velocity": 75, "start_time": 17},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 75, "start_time": 17.25},
    {"mute": false, "pitch": 83, "duration": 0.25, "velocity": 75, "start_time": 17.5},
    {"mute": false, "pitch": 88, "duration": 0.5, "velocity": 80, "start_time": 17.75},
    {"mute": false, "pitch": 83, "duration": 0.25, "velocity": 70, "start_time": 18.25},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 70, "start_time": 18.5},
    {"mute": false, "pitch": 76, "duration": 0.25, "velocity": 70, "start_time": 18.75},
    {"mute": false, "pitch": 72, "duration": 0.25, "velocity": 80, "start_time": 25},
    {"mute": false, "pitch": 76, "duration": 0.25, "velocity": 80, "start_time": 25.25},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 80, "start_time": 25.5},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 85, "start_time": 25.75},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 85, "start_time": 26},
    {"mute": false, "pitch": 91, "duration": 0.5, "velocity": 90, "start_time": 26.25},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 75, "start_time": 26.75},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 27},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 75, "start_time": 27.25},
    {"mute": false, "pitch": 76, "duration": 0.25, "velocity": 75, "start_time": 27.5},
    {"mute": false, "pitch": 72, "duration": 0.25, "velocity": 75, "start_time": 27.75}
  ];
}

// Development section for Outer Spiral
function getOuterSpiralDevelopmentNotes() {
  return [
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 70, "start_time": 0.5},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 0.75},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 1},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 1.25},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 70, "start_time": 1.5},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 1.75},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 2},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 2.25},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 70, "start_time": 4.5},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 4.75},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 5},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 5.25},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 70, "start_time": 5.5},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 5.75},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 80, "start_time": 6},
    {"mute": false, "pitch": 82, "duration": 0.25, "velocity": 75, "start_time": 6.25},
    {"mute": false, "pitch": 81, "duration": 0.25, "velocity": 70, "start_time": 8.5},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 75, "start_time": 8.75},
    {"mute": false, "pitch": 90, "duration": 0.25, "velocity": 80, "start_time": 9},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 75, "start_time": 9.25},
    {"mute": false, "pitch": 81, "duration": 0.25, "velocity": 70, "start_time": 9.5},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 75, "start_time": 9.75},
    {"mute": false, "pitch": 90, "duration": 0.25, "velocity": 80, "start_time": 10},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 75, "start_time": 10.25},
    {"mute": false, "pitch": 81, "duration": 0.25, "velocity": 70, "start_time": 12.5},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 75, "start_time": 12.75},
    {"mute": false, "pitch": 90, "duration": 0.25, "velocity": 80, "start_time": 13},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 75, "start_time": 13.25},
    {"mute": false, "pitch": 81, "duration": 0.25, "velocity": 70, "start_time": 13.5},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 75, "start_time": 13.75},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 14},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 75, "start_time": 14.25},
    {"mute": false, "pitch": 83, "duration": 0.25, "velocity": 75, "start_time": 16.5},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 16.75},
    {"mute": false, "pitch": 91, "duration": 0.25, "velocity": 85, "start_time": 17},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 17.25},
    {"mute": false, "pitch": 83, "duration": 0.25, "velocity": 75, "start_time": 17.5},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 17.75},
    {"mute": false, "pitch": 91, "duration": 0.25, "velocity": 85, "start_time": 18},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 18.25},
    {"mute": false, "pitch": 83, "duration": 0.25, "velocity": 75, "start_time": 20.5},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 20.75},
    {"mute": false, "pitch": 91, "duration": 0.25, "velocity": 85, "start_time": 21},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 21.25},
    {"mute": false, "pitch": 83, "duration": 0.25, "velocity": 75, "start_time": 21.5},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 80, "start_time": 21.75},
    {"mute": false, "pitch": 90, "duration": 0.25, "velocity": 85, "start_time": 22},
    {"mute": false, "pitch": 86, "duration": 0.25, "velocity": 80, "start_time": 22.25},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 80, "start_time": 24.5},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 85, "start_time": 24.75},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 90, "start_time": 25},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 85, "start_time": 25.25},
    {"mute": false, "pitch": 79, "duration": 0.25, "velocity": 80, "start_time": 25.5},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 85, "start_time": 25.75},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 90, "start_time": 26},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 85, "start_time": 26.25},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 85, "start_time": 28.5},
    {"mute": false, "pitch": 84, "duration": 0.125, "velocity": 90, "start_time": 28.625},
    {"mute": false, "pitch": 88, "duration": 0.125, "velocity": 95, "start_time": 28.75},
    {"mute": false, "pitch": 91, "duration": 0.125, "velocity": 100, "start_time": 28.875},
    {"mute": false, "pitch": 95, "duration": 0.125, "velocity": 105, "start_time": 29},
    {"mute": false, "pitch": 91, "duration": 0.125, "velocity": 100, "start_time": 29.125},
    {"mute": false, "pitch": 88, "duration": 0.125, "velocity": 95, "start_time": 29.25},
    {"mute": false, "pitch": 84, "duration": 0.125, "velocity": 90, "start_time": 29.375},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 85, "start_time": 29.5},
    {"mute": false, "pitch": 84, "duration": 0.125, "velocity": 90, "start_time": 29.625},
    {"mute": false, "pitch": 88, "duration": 0.125, "velocity": 95, "start_time": 29.75},
    {"mute": false, "pitch": 91, "duration": 0.125, "velocity": 100, "start_time": 29.875},
    {"mute": false, "pitch": 95, "duration": 0.125, "velocity": 105, "start_time": 30},
    {"mute": false, "pitch": 98, "duration": 0.125, "velocity": 110, "start_time": 30.125},
    {"mute": false, "pitch": 96, "duration": 0.25, "velocity": 100, "start_time": 30.25},
    {"mute": false, "pitch": 93, "duration": 0.25, "velocity": 95, "start_time": 30.5},
    {"mute": false, "pitch": 91, "duration": 0.25, "velocity": 90, "start_time": 30.75},
    {"mute": false, "pitch": 88, "duration": 0.25, "velocity": 85, "start_time": 31},
    {"mute": false, "pitch": 84, "duration": 0.25, "velocity": 80, "start_time": 31.25},
    {"mute": false, "pitch": 79, "duration": 0.5, "velocity": 75, "start_time": 31.5}
  ];
}

// Culmination section for Outer Spiral
function getOuterSpiralCulminationNotes() {
  return [
    {"mute": false, "pitch": 72, "duration": 0.125, "velocity": 90, "start_time": 0},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 90, "start_time": 0.125},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 90, "start_time": 0.25},
    {"mute": false, "pitch": 84, "duration": 0.125, "velocity": 95, "start_time": 0.375},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 90, "start_time": 0.5},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 90, "start_time": 0.625},
    {"mute": false, "pitch": 72, "duration": 0.125, "velocity": 90, "start_time": 0.75},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 90, "start_time": 0.875},
    {"mute": false, "pitch": 72, "duration": 0.125, "velocity": 90, "start_time": 4},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 90, "start_time": 4.125},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 90, "start_time": 4.25},
    {"mute": false, "pitch": 84, "duration": 0.125, "velocity": 95, "start_time": 4.375},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 90, "start_time": 4.5},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 90, "start_time": 4.625},
    {"mute": false, "pitch": 72, "duration": 0.125, "velocity": 90, "start_time": 4.75},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 90, "start_time": 4.875},
    {"mute": false, "pitch": 74, "duration": 0.125, "velocity": 90, "start_time": 8},
    {"mute": false, "pitch": 77, "duration": 0.125, "velocity": 90, "start_time": 8.125},
    {"mute": false, "pitch": 81, "duration": 0.125, "velocity": 90, "start_time": 8.25},
    {"mute": false, "pitch": 86, "duration": 0.125, "velocity": 95, "start_time": 8.375},
    {"mute": false, "pitch": 81, "duration": 0.125, "velocity": 90, "start_time": 8.5},
    {"mute": false, "pitch": 77, "duration": 0.125, "velocity": 90, "start_time": 8.625},
    {"mute": false, "pitch": 74, "duration": 0.125, "velocity": 90, "start_time": 8.75},
    {"mute": false, "pitch": 77, "duration": 0.125, "velocity": 90, "start_time": 8.875},
    {"mute": false, "pitch": 74, "duration": 0.125, "velocity": 90, "start_time": 12},
    {"mute": false, "pitch": 77, "duration": 0.125, "velocity": 90, "start_time": 12.125},
    {"mute": false, "pitch": 81, "duration": 0.125, "velocity": 90, "start_time": 12.25},
    {"mute": false, "pitch": 86, "duration": 0.125, "velocity": 95, "start_time": 12.375},
    {"mute": false, "pitch": 81, "duration": 0.125, "velocity": 90, "start_time": 12.5},
    {"mute": false, "pitch": 77, "duration": 0.125, "velocity": 90, "start_time": 12.625},
    {"mute": false, "pitch": 74, "duration": 0.125, "velocity": 90, "start_time": 12.75},
    {"mute": false, "pitch": 77, "duration": 0.125, "velocity": 90, "start_time": 12.875},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 95, "start_time": 16},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 95, "start_time": 16.125},
    {"mute": false, "pitch": 83, "duration": 0.125, "velocity": 95, "start_time": 16.25},
    {"mute": false, "pitch": 88, "duration": 0.125, "velocity": 100, "start_time": 16.375},
    {"mute": false, "pitch": 83, "duration": 0.125, "velocity": 95, "start_time": 16.5},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 95, "start_time": 16.625},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 95, "start_time": 16.75},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 95, "start_time": 16.875},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 95, "start_time": 20},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 95, "start_time": 20.125},
    {"mute": false, "pitch": 83, "duration": 0.125, "velocity": 95, "start_time": 20.25},
    {"mute": false, "pitch": 88, "duration": 0.125, "velocity": 100, "start_time": 20.375},
    {"mute": false, "pitch": 83, "duration": 0.125, "velocity": 95, "start_time": 20.5},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 95, "start_time": 20.625},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 95, "start_time": 20.75},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 95, "start_time": 20.875},
    {"mute": false, "pitch": 72, "duration": 0.125, "velocity": 100, "start_time": 24},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 100, "start_time": 24.125},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 100, "start_time": 24.25},
    {"mute": false, "pitch": 84, "duration": 0.125, "velocity": 105, "start_time": 24.375},
    {"mute": false, "pitch": 88, "duration": 0.125, "velocity": 105, "start_time": 24.5},
    {"mute": false, "pitch": 91, "duration": 0.125, "velocity": 105, "start_time": 24.625},
    {"mute": false, "pitch": 96, "duration": 0.125, "velocity": 110, "start_time": 24.75},
    {"mute": false, "pitch": 91, "duration": 0.125, "velocity": 105, "start_time": 24.875},
    {"mute": false, "pitch": 88, "duration": 0.125, "velocity": 105, "start_time": 25},
    {"mute": false, "pitch": 84, "duration": 0.125, "velocity": 100, "start_time": 25.125},
    {"mute": false, "pitch": 79, "duration": 0.125, "velocity": 100, "start_time": 25.25},
    {"mute": false, "pitch": 76, "duration": 0.125, "velocity": 100, "start_time": 25.375},
    {"mute": false, "pitch": 72, "duration": 0.5, "velocity": 95, "start_time": 25.5},
    {"mute": false, "pitch": 76, "duration": 1, "velocity": 110, "start_time": 28},
    {"mute": false, "pitch": 79, "duration": 1, "velocity": 110, "start_time": 28.5},
    {"mute": false, "pitch": 84, "duration": 1, "velocity": 115, "start_time": 29},
    {"mute": false, "pitch": 88, "duration": 1, "velocity": 115, "start_time": 29.5},
    {"mute": false, "pitch": 91, "duration": 1, "velocity": 120, "start_time": 30},
    {"mute": false, "pitch": 96, "duration": 1, "velocity": 120, "start_time": 30.5},
    {"mute": false, "pitch": 91, "duration": 0.5, "velocity": 110, "start_time": 31.5}
