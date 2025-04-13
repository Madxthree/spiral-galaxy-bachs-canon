# Spiral Galaxy as Bach's Canon

An experimental composition translating the mathematical structure of spiral galaxies into musical form using Bach's canonical techniques. Implemented with Ableton Live through the Ableton MCP (Model Context Protocol).

![Spiral Galaxy](assets/SpiralGalaxy_00012.png)

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

## Mathematical Foundation

The composition is built on the mathematical properties of logarithmic spirals (r = a·e^(b·θ)), which model spiral galaxies. Key mathematical elements include:

- **Logarithmic Growth**: Note patterns follow the exponential growth of spiral arms
- **Golden Ratio**: Structure and transitions use φ ≈ 1.618 for natural proportions
- **Density Wave Theory**: Musical intensity reflects density variations in spiral arms

For detailed mathematical analysis, see the [docs/math-analysis.md](docs/math-analysis.md) file.

## Optimization Process

The implementation underwent significant optimization to improve its efficiency and musical cohesion:

- **Code Efficiency**: Reduced code size by ~80% through modular functions and pattern encapsulation
- **Unified Structure**: Replaced separate clips with a single 96-bar composition using time offsets
- **Batch Processing**: Implemented batch processing of notes to prevent API limitations
- **Musical Integration**: Preserved Bach's canonical structure while creating seamless transitions

The final optimized version maintains mathematical precision while significantly improving performance. For detailed comparison, see [docs/optimization-guide.md](docs/optimization-guide.md).

## Audio Examples

Listen to the composition evolution:
- [Original Version (Pre-optimization)](https://soundcloud.com/evgeny-kalachihin/mcp_bach_milkywayspiral_experi/s-MiV1jP0UQVO?si=a370782985714a71a3f2333bfe744b3b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing)
- [Final Version (Post-optimization)](https://soundcloud.com/evgeny-kalachihin/mcp_bach_milkywayspiral_expe-1/s-xKfL2xo4PWW?si=55b638758fa0467da9cc60ae467fe05c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing)

## Installation & Usage

The following setup allows for experiencing the composition firsthand and observing how mathematical principles of spiral galaxies translate into Bach's musical structures through code. Running this implementation demonstrates Ableton MCP in action as it executes the programmatic instructions that transform cosmic mathematics into musical expression.

### Prerequisites

- Ableton Live 12 (Trial version is sufficient)
- Ableton orchestral instrument packs (Brass, Mallets, Strings, Woodwinds)
- Claude for Desktop app
- Ableton MCP integration installed (see [ahujasid/ableton-mcp](https://github.com/ahujasid/ableton-mcp))

### Setup

1. Install the Ableton MCP Remote Script (see [docs/ableton-mcp-integration.md](docs/ableton-mcp-integration.md))
2. Configure Claude Desktop for MCP integration
3. Start Ableton Live
4. Clone this repository
5. Execute the composition by copying `src/implementation.js` into Claude

For detailed setup instructions, see the [docs/ableton-mcp-integration.md](docs/ableton-mcp-integration.md) file.

## Project Structure

- **src/**: Contains the optimized implementation code
- **docs/**: Detailed documentation on various aspects of the project
  - **math-analysis.md**: Mathematical foundations of the composition
  - **optimization-guide.md**: Process and benefits of code optimization
  - **ableton-mcp-integration.md**: Guide to Ableton MCP integration
  - **orchestral-packs.md**: Required orchestral instruments
  - **audio-comparison.md**: Comparison between original and optimized versions

## License

MIT License - See [LICENSE.md](LICENSE.md) for details
