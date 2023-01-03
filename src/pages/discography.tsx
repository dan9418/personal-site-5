import React from "react";
import "./discography.scss";
import DISCOGRAPHY_DATA, {
  IAlbum,
  IArtist,
  IconId,
  ILink,
  ITrack,
} from "../data/discography.data";

const getText = (linkId: IconId): string => {
  switch (linkId) {
    case IconId.AppleMusic:
      return "Apple Music";
    case IconId.Bandcamp:
      return "Bandcamp";
    case IconId.Facebook:
      return "Facebook";
    case IconId.Instagram:
      return "Instagram";
    case IconId.SoundCloud:
      return "SoundCloud";
    case IconId.Lyrics:
      return "Lyrics";
    case IconId.SoundCloud:
      return "SoundCloud";
    case IconId.Spotify:
      return "Spotify";
    case IconId.YouTube:
      return "YouTube";
    default:
      return "";
  }
};

const LinkList = ({ links }) => {
  return (
    <ul>
      {links.map((link) => {
        const { href, id } = link as ILink;
        return (
          <li key={id}>
            <a href={href}>{getText(id)}</a>
          </li>
        );
      })}
    </ul>
  );
};

const Album = ({ album }) => {
  const { name, links, releaseDate, remasterDate, tracks, artSrc } =
    album as IAlbum;
  return (
    <section className="album" key={name}>
      <h4>{name}</h4>
      Released: {releaseDate}
      <h5>Links</h5>
      <LinkList links={links} />
      <h5>Tracks</h5>
      <ol>
        {tracks.map((track) => {
          const { name, writer } = track as ITrack;
          return <li key={name}>{name}</li>;
        })}
      </ol>
    </section>
  );
};

const Artist = ({ artist }) => {
  const { name, links, albums } = artist as IArtist;
  return (
    <section className="artist" key={name}>
      <h2>{name}</h2>
      <h3>Links</h3>
      <LinkList links={links} />
      <h3>Albums</h3>
      {albums.map((album) => (
        <Album album={album} />
      ))}
    </section>
  );
};

const DiscographyPage = () => {
  return (
    <>
      <h1>Music Discography</h1>
      {DISCOGRAPHY_DATA.map((artist) => (
        <Artist artist={artist} />
      ))}
    </>
  );
};

export default DiscographyPage;
