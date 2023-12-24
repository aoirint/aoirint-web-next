import React from 'react'
import { LastfmTrack } from '@/api/useLastfmApiMiddleware'

interface LastfmApiMiddlewareCardProps {
  track: LastfmTrack
}

const LastfmApiMiddlewareCard: React.FC<LastfmApiMiddlewareCardProps> = ({ track }) => {
  return (
    <>
      <div className='card mb-6'>
        <div className='card-content py-4'>
          <div className='media'>
            <div className='media-left'>
              {track.isPlaying ? (
                <a href={track.url ?? '#'}>
                  <figure className='image is-64x64'>
                    <img src={track.albumArtUrl ?? '#'} alt='Album art' />
                  </figure>
                </a>
              ) : (
                <figure className='image is-64x64 has-background-light'></figure>
              )}
            </div>
            <div className='media-content'>
              {track.isPlaying ? (
                <>
                  <p className='title is-5'>
                    {'♪ '}
                    <a href={track.url ?? '#'} style={{ color: 'inherit' }}>
                      {track.title}
                    </a>
                  </p>
                  <p className='subtitle is-7 mb-2'>
                    <a href={track.url ?? '#'} style={{ color: 'inherit' }}>
                      {track.album} - {track.artist}
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <p className='title is-5'>再生中の音楽はありません</p>
                  <p className='subtitle is-7 mb-2'>-</p>
                </>
              )}
              <p className='is-size-7 has-text-right has-text-grey'>
                Powered by{' '}
                <a href='https://www.last.fm/user/aoirint'>AudioScrobbler / Last.fm API</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LastfmApiMiddlewareCard
