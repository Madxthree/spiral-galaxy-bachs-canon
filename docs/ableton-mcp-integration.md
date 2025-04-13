# Ableton MCP Integration Guide

This document explains how the "Spiral Galaxy as Bach's Canon" project integrates with Ableton Live using the Ableton MCP (Model Context Protocol).

## What is Ableton MCP?

Ableton MCP (Model Context Protocol) is a protocol that allows AI models like Claude to interact with Ableton Live. It enables programmatic control of Ableton Live, including creating tracks, adding clips, manipulating notes, and more.

The protocol is implemented in the [ahujasid/ableton-mcp](https://github.com/ahujasid/ableton-mcp) repository, which provides a bridge between Claude and Ableton Live.

## Setup Process

To use this project with Ableton MCP, you need to complete the following setup:

### 1. Installing the Ableton Remote Script

1. Download the `AbletonMCP_Remote_Script/__init__.py` file from the [ahujasid/ableton-mcp](https://github.com/ahujasid/ableton-mcp) repository

2. Copy the folder to Ableton's MIDI Remote Scripts directory. Different OS and versions have different locations:

   **For macOS:**
   - Method 1: Go to Applications > Right-click on Ableton Live app → Show Package Contents → Navigate to:
     `Contents/App-Resources/MIDI Remote Scripts/`
   - Method 2: If it's not there in the first method, use the direct path (replace XX with your version number):
     `/Users/[Username]/Library/Preferences/Ableton/Live XX/User Remote Scripts`
   
   **For Windows:**
   - Method 1:
     `C:\Users\[Username]\AppData\Roaming\Ableton\Live x.x.x\Preferences\User Remote Scripts`
   - Method 2:
     `C:\ProgramData\Ableton\Live XX\Resources\MIDI Remote Scripts\`
   - Method 3:
     `C:\Program Files\Ableton\Live XX\Resources\MIDI Remote Scripts\`

3. Create a folder called 'AbletonMCP' in the Remote Scripts directory and paste the downloaded '__init__.py' file

4. Launch Ableton Live

5. Go to Settings/Preferences → Link, Tempo & MIDI

6. In the Control Surface dropdown, select "AbletonMCP"

7. Set Input and Output to "None"

### 2. Configuring Claude Desktop

1. Install [Claude Desktop](https://claude.ai/desktop) if you haven't already

2. Make sure you have the uv package manager installed:
   - For Mac: `brew install uv`
   - For other platforms: follow the instructions at [uv's official website](https://docs.astral.sh/uv/getting-started/installation/)

3. Go to Claude > Settings > Developer > Edit Config > claude_desktop_config.json and add:
   ```json
   {
       "mcpServers": {
           "AbletonMCP": {
               "command": "uvx",
               "args": [
                   "ableton-mcp"
               ]
           }
       }
   }
   ```

4. Restart Claude Desktop

## How Our Project Uses MCP

The "Spiral Galaxy as Bach's Canon" project leverages Ableton MCP for:

1. **Track Creation and Management**: Creates and names six instrument tracks that represent different elements of a spiral galaxy
2. **Instrument Loading**: Loads appropriate orchestral instruments for each track
3. **Note Generation and Manipulation**: Creates complex note patterns derived from mathematical spiral galaxy models
4. **Clip Creation and Editing**: Generates clips based on the three-part structure of the composition
5. **Time Offset Application**: Uses time offsets to create a continuous 96-bar composition
6. **Playback Control**: Manages the playback of the entire composition

## MCP Functions Used

Our implementation primarily uses these MCP functions:

- `set_tempo()` - Sets the composition's tempo to 72 BPM
- `create_midi_track()` - Creates the six instrument tracks
- `set_track_name()` - Names each track according to the galactic element it represents
- `load_instrument_or_effect()` - Loads appropriate orchestral instruments for each track
- `create_clip()` - Creates clips for the composition
- `set_clip_name()` - Names clips according to their function
- `add_notes_to_clip()` - Adds mathematically generated note patterns
- `fire_clip()` - Controls playback

## Running the Composition

To run the composition:

1. Make sure Ableton Live is running with the AbletonMCP Remote Script loaded
2. Open Claude Desktop
3. Copy the code from `src/implementation.js` in this repository
4. Paste the code into Claude
5. Ask Claude to execute the code through Ableton MCP
6. Wait as the composition is generated in real-time within Ableton Live

## Troubleshooting MCP Integration

Common issues and solutions:

1. **Connection Problems**:
   - Ensure Ableton Live is running before starting Claude Desktop
   - Check that the AbletonMCP is properly selected in Ableton's settings
   - Restart both applications if connection issues persist

2. **Instrument Loading Errors**:
   - Verify that all orchestral packs are properly installed in Ableton Live
   - If you see "Browser item with URI not found" errors, check your Ableton Library structure

3. **API Limits**:
   - If the code execution seems to stop, it might be hitting API rate limits
   - The implementation uses batch processing to minimize this issue

4. **Implementation Issues**:
   - If specific instruments don't load correctly, try using alternate URI paths
   - Check Ableton's Instrument Rack paths if direct orchestral pack references fail

## Resources

- [Ableton MCP GitHub Repository](https://github.com/ahujasid/ableton-mcp)
- [Claude Desktop](https://claude.ai/desktop)
- [Ableton Live Documentation](https://www.ableton.com/en/manual/)
