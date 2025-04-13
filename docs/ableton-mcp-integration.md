# Ableton MCP Integration Guide

This document explains how the "Spiral Galaxy as Bach's Canon" project integrates with Ableton Live using the Ableton MCP (Model Context Protocol).

## What is Ableton MCP?

Ableton MCP (Model Context Protocol) is a protocol that allows external applications to interact with Ableton Live. It enables programmatic control of Ableton Live, including creating tracks, adding clips, manipulating notes, and more.

The protocol is implemented in the [ahujasid/ableton-mcp](https://github.com/ahujasid/ableton-mcp) repository, which provides a Python interface for communication with Ableton Live.

## How Our Project Uses MCP

The "Spiral Galaxy as Bach's Canon" project leverages Ableton MCP for:

1. **Track Creation and Management**: Programmatically creates and names six instrument tracks that represent different elements of a spiral galaxy
2. **Instrument Loading**: Dynamically loads appropriate instruments for each track
3. **Note Generation and Manipulation**: Creates complex note patterns derived from mathematical spiral galaxy models
4. **Clip Creation and Editing**: Generates and modifies clips based on the three-part structure of the composition
5. **Playback Control**: Manages the playback of the entire composition

## Implementation Details

Our implementation primarily uses these MCP functions:

- `set_tempo()` - Sets the composition's tempo to 72 BPM
- `create_midi_track()` - Creates the six instrument tracks
- `set_track_name()` - Names each track according to the galactic element it represents
- `load_instrument_or_effect()` - Loads appropriate instruments for each track
- `create_clip()` - Creates clips for each section of the composition
- `set_clip_name()` - Names clips according to their function
- `add_notes_to_clip()` - Adds mathematically generated note patterns
- `fire_clip()` - Controls playback

## Setup Requirements

To run this project with Ableton MCP:

1. **Install Ableton MCP**:
   ```bash
   git clone https://github.com/ahujasid/ableton-mcp.git
   cd ableton-mcp
   pip install -e .
   ```

2. **Configure Ableton Live**:
   - Enable remote script integration in Ableton Live Preferences
   - Follow the setup instructions in the MCP repository

3. **Run the Integration**:
   ```bash
   # Start the MCP server first
   python -m MCP_Server
   
   # Then run our implementation script
   node src/implementation.js
   ```

## Troubleshooting MCP Integration

Common issues and solutions:

1. **Connection Problems**:
   - Ensure Ableton Live is running before starting the MCP server
   - Check that the correct ports are open and not blocked by a firewall

2. **Instrument Loading Errors**:
   - Verify that the instrument packs are properly installed in Ableton Live
   - Check that the URI paths to instruments are correct for your Ableton installation

3. **API Limits**:
   - If you encounter API rate limiting, adjust the `batchSize` parameter in the `addNotesInBatches()` function

4. **Session Issues**:
   - Use the Ableton MCP debugging tools to monitor the state of the Live session

## Resources

- [Ableton MCP GitHub Repository](https://github.com/ahujasid/ableton-mcp)
- [Ableton Live API Documentation](https://docs.cycling74.com/max8/vignettes/live_object_model)
- [Discord Server](https://discord.gg/) for community support
