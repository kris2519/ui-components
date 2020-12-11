# Changelog
All notable changes to this project will be documented in this file.

## [1.3.16](https://github.com/starladder/ui-react/releases/tag/v1.3.16) - 2020-11-13
### Fixed
- MatchInfoMapList Component - checked if playerScore and opponentScore exist
## [1.3.15](https://github.com/starladder/ui-react/releases/tag/v1.3.15) - 2020-10-20
### Fixed
- Timezone Component - added setActiveDdStatus callback and isActive status props
## [1.3.14](https://github.com/starladder/ui-react/releases/tag/v1.3.14) - 2020-09-18
### Fixed
- Dropdown Component - added setActiveDdStatus callback
## [1.3.13](https://github.com/starladder/ui-react/releases/tag/v1.3.13) - 2020-09-04
### Added
- .npmrc
### Fixed
- Dropdown Component - made isActive status flexible
- Table Row Component - added styleClassName props
## [1.3.12](https://github.com/starladder/ui-react/releases/tag/v1.3.12) - [YANKED]
## [1.3.11](https://github.com/starladder/ui-react/releases/tag/v1.3.11) - 2020-06-09
### Added
- Standings Grid, Standings Grid Round Components - modificators for double upper and lower grids
## [1.3.10](https://github.com/starladder/ui-react/releases/tag/v1.3.10) - 2020-04-15
### Added
- Team Preview Component; Player Preview Component - minor fix
## [1.3.9](https://github.com/starladder/ui-react/releases/tag/v1.3.9) - 2020-04-15
### Added
- Team Preview Component; Player Preview Component - add img flag withoutImg (default: false)
## [1.3.8](https://github.com/starladder/ui-react/releases/tag/v1.3.8) - 2020-03-27
### Added
- Modal Component - add new props
## [1.3.7](https://github.com/starladder/ui-react/releases/tag/v1.3.7) - 2020-03-13
### Added
- NewsPreview, VideoPreview Components - add holder for video icon
## [1.3.6](https://github.com/starladder/ui-react/releases/tag/v1.3.6) - 2020-03-13
### Added
- Accordion List, List, Grid, ResponsiveNav, StandingsGridRound, Table, TableRow, TableHeaders, Tabs Components - removing null and undefined children-cells
## 1.3.5 - [YANKED]
## [1.3.4](https://github.com/starladder/ui-react/releases/tag/v1.3.4) - 2020-03-11
### Added
- List Component - removing falsy children-cells
## [1.3.3](https://github.com/starladder/ui-react/releases/tag/v1.3.3) - 2020-03-11
### Added
- TableRow, TableHeader Components - removing falsy children-cells
## 1.3.2 - [YANKED]
## [1.3.1](https://github.com/starladder/ui-react/releases/tag/v1.3.1) - 2020-03-02
### Fixed
- TableRow Component
  - Removed props `cellClassName` from span.table-cell-text and added to div.table-cell
## [1.3.0](https://github.com/starladder/ui-react/releases/tag/v1.3.0) - 2020-02-19
### Fixed
- [Issue #33](https://github.com/starladder/ui-react/issues/33) Button ButtonHref Components 
	- Added additional css class style[btn-icon-${icon}] for svg icon
- [Issue #34](https://github.com/starladder/ui-react/issues/34) Timezones Component 
	- Added 2 optional props:
		- decoratorIcon (instead of icon="clock")
		- arrowIcon (for arrow on the right side of dropdown heading)
- [Issue #40](https://github.com/starladder/ui-react/issues/40) MatchInfoMapList Component
	- Added flag showMapsName (default: false) - option for display map name
  - Changed item.name type from string to any
  - Replaced props map with maps
- [Issue #41](https://github.com/starladder/ui-react/issues/41) SocialBtn SocialHref Components
	- Moved additional css class style[`mod-${icon}`] from .social-icon to .social
- [Issue #42](https://github.com/starladder/ui-react/issues/42) Tabs Component
	- Added optional props
		- forceValue (default: null)
    - onTabChange (default (string | number ) => {})
  - Added PropsType
### Added
- News Component 
	- added holder div.news-preview-info to html structure
	- added flag hasImg (default: true)

## [1.2.2](https://github.com/starladder/ui-react/releases/tag/v1.2.2) - 2020-01-31
### Added
-  Different types of children in StandingsGrid component

## [1.2.1](https://github.com/starladder/ui-react/releases/tag/v1.2.1) - 2020-01-28
### Refactored
-  Refactor useWindowWidth to be available on server side

## [1.2.0](https://github.com/starladder/ui-react/releases/tag/v1.2.0) - 2020-01-22
### Added
- Standings Grid Component (without styles and storybook knobs)

## [1.1.1](https://github.com/starladder/ui-react/releases/tag/v1.1.1) - 2020-01-06
### Added
- Functionality to Dropdown component
- Absolute path to Svg component

## [1.1.0](https://github.com/starladder/ui-react/releases/tag/v1.1.0) - 2019-12-24
### Excluded
- 'react' and 'react-dom' libraries from bundle

## [1.0.10](https://github.com/starladder/ui-react/releases/tag/v1.0.10) - 2019-12-11
### Added
- CHANGELOG.md

## [1.0.9](https://github.com/starladder/ui-react/releases/tag/v1.0.9) - 2019-11-21
Stable version, minor fixes
### Added
- Testing
### Updated
- README.md
- .npmignore

## [1.0.8](https://github.com/starladder/ui-react/releases/tag/v1.0.8) - 2019-11-19
First Stable version
### Added
- Update package.json
- Update .gitignore
- Remove Flag Component

## 1.0.1-1.0.7 - [YANKED]
