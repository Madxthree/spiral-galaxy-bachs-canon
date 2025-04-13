# Spiral Galaxy as Bach's Canon

An experimental composition translating the mathematical structure of spiral galaxies into musical form using Bach's canonical techniques. Implemented with Ableton Live through the Ableton MCP (Model Context Protocol).

![Spiral Galaxy](assets/spiral-galaxy-banner.jpg)

## Audio Examples

Listen to the composition evolution:
- [Original Version (Pre-optimization)](https://soundcloud.com/evgeny-kalachihin/mcp_bach_milkywayspiral_experi/s-MiV1jP0UQVO?si=a370782985714a71a3f2333bfe744b3b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing)
- [Final Version (Post-optimization)](https://soundcloud.com/evgeny-kalachihin/mcp_bach_milkywayspiral_expe-1/s-xKfL2xo4PWW?si=55b638758fa0467da9cc60ae467fe05c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing)

## Project Overview

This project explores the intersection of astronomy, mathematics, and classical music by creating a direct mapping between the mathematical properties of spiral galaxies and the contrapuntal structure of Bach's canons. It leverages Ableton Live's MCP for programmatic control of the music creation process.

### Key Features

- **Astronomical-Mathematical Connection**: Translates logarithmic spiral patterns into musical sequences
- **Canonical Structure**: Implements Bach's canonical techniques within a three-part composition
- **Golden Ratio Integration**: Uses the golden ratio (φ ≈ 1.618) for structural proportions
- **Ableton Live Implementation**: Complete code for creating the composition in Ableton Live

## Composition Structure

The composition is divided into three sections:

1. **Exposition (0:00-0:25)**: Introduces the main theme with the basic spiral pattern
2. **Development (0:25-0:50)**: Explores variations with increased complexity
3. **Culmination (0:50-1:20)**: Reaches maximum density and harmonic richness

Each instrument represents a specific element of the spiral galaxy:

- **Galactic Core (Piano)**: The dense center of the galaxy
- **Inner Spiral (Strings)**: The inner arms closest to the center
- **Middle Spiral (Brass)**: The middle region of spiral arms
- **Outer Spiral (Woodwinds)**: The outer regions of spiral arms
- **Star Clusters (Vibraphone)**: Concentrated star formations
- **Cosmic Background (Pad)**: The diffuse interstellar material

## Installation & Usage

### Prerequisites

- Ableton Live 12 (Trial version is sufficient)
- Ableton Live standard orchestral instrument packs:
  - Orchestral Brass
  - Orchestral Mallets
  - Orchestral Strings
  - Orchestral Woodwinds
- Claude for Desktop app
- Ableton MCP integration installed (see [ahujasid/ableton-mcp](https://github.com/ahujasid/ableton-mcp))

### Setup

1. Install the Ableton MCP Remote Script:
   - Download the `AbletonMCP_Remote_Script/__init__.py` file from [ahujasid/ableton-mcp](https://github.com/ahujasid/ableton-mcp)
   - Create a folder called 'AbletonMCP' in Ableton's MIDI Remote Scripts directory and place the __init__.py file inside
   - In Ableton Live, go to Settings/Preferences → Link, Tempo & MIDI
   - Select "AbletonMCP" in the Control Surface dropdown
   - Set Input and Output to "None"

2. Configure Claude Desktop:
   - Go to Claude > Settings > Developer > Edit Config > claude_desktop_config.json
   - Include the following configuration:
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

3. Start Ableton Live

4. Clone this repository to access the implementation code

5. Execute the composition:
   - Open Claude Desktop
   - Copy the contents of `src/implementation.js` from this repository
   - Paste it into Claude and ask it to execute the code
   - The composition will be generated automatically in Ableton Live
