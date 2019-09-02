// // @flow
//
// import React from 'react';
// import classNames from 'classnames';
// import i18n from 'i18n';
//
// import UiFlag from '_ui/flag/UiFlag';
// import UpcomingTime from 'components/upcoming-time/UpcomingTime';
//
// import formatDateTime from 'utils/formatDateTime';
// import MATCH from 'constants/match';
// import type { MatchesItemType, ParticipantType } from 'flow-types/matches';
//
// type PropsType = {
//   preview: MatchesItemType,
//   locale: string,
//   timezone: string,
//   type: string,
//   isShowDiscipline: boolean
// };
//
// function MatchPreview({ preview, isShowDiscipline = false, locale, timezone, type = 'regular', style }: PropsType) {
//
//   const renderTeam = (team: ParticipantType, isReverse: boolean = false) => (
//     <div className={classNames(isReverse ? style.matchTeamReverse : style.matchTeam)}>
//       {type !== 'aside' && (
//         <picture className={style.matchTeamImgHolder}>
//           <source srcSet={`${team.img.thumb_140} 1x, ${team.img.thumb_270} 2x`} media="(max-width: 600px)" />
//           <img className={style.matchTeamImg} src={team.img.thumb_270} alt={team.name} />
//         </picture>
//       )}
//       <div className={style.matchTeamInfo}>
//         <UiFlag styleClassName={style.matchTeamCountry} code={team.country} />
//         <p className={style.matchTeamName}>{team.name}</p>
//       </div>
//     </div>
//   );
//
//   const MatchInfoFinished = () => (
//     <React.Fragment>
//       <span className={style.matchScore}>
//         <span
//           className={classNames(
//             style.matchScoreNum,
//             {
//               [style.matchWinner]: preview.player.score > preview.opponent.score
//             },
//             {
//               [style.matchLoser]: preview.player.score < preview.opponent.score
//             }
//           )}
//         >
//           {preview.player.score}
//         </span>
//         {type !== 'aside' && ' : '}
//         <span
//           className={classNames(
//             style.matchScoreNum,
//             {
//               [style.matchWinner]: preview.player.score < preview.opponent.score
//             },
//             {
//               [style.matchLoser]: preview.player.score > preview.opponent.score
//             }
//           )}
//         >
//           {preview.opponent.score}
//         </span>
//       </span>
//       {type !== 'aside' && (
//         <span className={style.matchDescription}>
//           {i18n.t('matches.label_played', { lng: locale })}{' '}
//           {formatDateTime(preview.date, 'datetime_6', locale, timezone)}
//         </span>
//       )}
//     </React.Fragment>
//   );
//
//   const MatchInfoUpcoming = () => (
//     <React.Fragment>
//       <span className={style.matchStatus}>{formatDateTime(preview.date, 'datetime_6', locale, timezone)}</span>
//       {type !== 'aside' && (
//         <span className={style.matchDescription}>
//           {i18n.t('matches.in', { lng: locale })}{' '}
//           <UpcomingTime time={preview.date} timezone={timezone} locale={locale} /> - {preview.system}
//         </span>
//       )}
//     </React.Fragment>
//   );
//
//   const MatchInfoLive = () => (
//     <React.Fragment>
//       <span className={style.matchBadge}>{i18n.t('matches.label_live', { lng: locale })}</span>
//       {type !== 'aside' && <span className={style.matchDescription}>{preview.system}</span>}
//     </React.Fragment>
//   );
//
//   return (
//     <div className={style.matchPreview}>
//       {isShowDiscipline && <p className={style.matchDiscipline}>{preview.discipline}</p>}
//       {type === 'aside' && <p className={style.matchName}>{preview.name}</p>}
//       {renderTeam(preview.player, true)}
//       <div className={style.matchInfo}>
//         {type !== 'aside' && <p className={style.matchName}>{preview.name}</p>}
//         {preview.status === MATCH.status.isFinished && <MatchInfoFinished />}
//         {preview.status === MATCH.status.isUpcoming && <MatchInfoUpcoming />}
//         {preview.status === MATCH.status.isLive && <MatchInfoLive />}
//       </div>
//       {renderTeam(preview.opponent)}
//     </div>
//   );
// }
//
// export default MatchPreview;
