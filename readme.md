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

1. **Exposition (0:00-0:35)**: Introduces the main theme with the basic spiral pattern
2. **Development (0:35-1:10)**: Explores variations with increased complexity
3. **Culmination (1:10-1:45)**: Reaches maximum density and harmonic richness

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

### Troubleshooting

- If you see "Browser item with URI not found" errors, ensure all orchestral packs are properly installed in Ableton
- Check that the AbletonMCP Remote Script is correctly loaded in Ableton Live
- Restart both Claude Desktop and Ableton Live if connection issues occur
- For more detailed guidance, refer to the [Ableton MCP Integration](docs/ableton-mcp-integration.md) document

## Mathematical Foundation

The composition is based on the logarithmic spiral formula:

```
r = a·e^(b·θ)
```

Where:
- r is the radius from the center
- θ is the angle
- a and b are constants that determine the shape of the spiral
- e is the base of natural logarithms

This pattern creates the characteristic spiral arms extending outward from the galactic center, with each arm maintaining the same shape as it rotates around the center.

## Documentation

- [Mathematical Analysis](docs/mathematical-analysis.md) - Detailed explanation of the mathematical principles used
- [Implementation Guide](docs/implementation-guide.md) - Guide to implementing the composition
- [Optimization Guide](docs/optimization-guide.md) - Information about the optimization process
- [Ableton MCP Integration](docs/ableton-mcp-integration.md) - How the project uses Ableton MCP
- [Orchestral Packs Guide](docs/orchestral-packs-guide.md) - Detailed information about required orchestral packs
- [Audio Comparison](docs/audio-comparison.md) - Comparison between original and optimized versions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Johann Sebastian Bach, for his timeless canonical techniques
- The mathematical beauty of spiral galaxies
- Ableton Live for making this implementation possible
