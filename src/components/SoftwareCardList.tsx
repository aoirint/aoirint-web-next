import Image from 'next/image'
import React from 'react'

export interface SoftwareCard {
  title: string
  description: string
  image: string
  imageAlt: string
  useUrl: string | null
  /** 跡地サイトやアーカイブサイトのURL */
  archiveUrl: string | null
  sourceCodeUrl: string | null
  detailUrl: string | null
  sourceProjectUrl: string | null
}

export interface SoftwareCardListProps {
  cards: SoftwareCard[]
}

const SoftwareCardList: React.FC<SoftwareCardListProps> = ({ cards }) => {
  return (
    <div className='columns is-multiline'>
      {cards.map((card, cardIndex) => (
        <div key={cardIndex} className='column is-full is-half-desktop'>
          <div className='box'>
            <article className='media'>
              <div className='media-left'>
                <figure className='image is-1by1 is-64x64'>
                  <Image src={card.image} alt={card.imageAlt} width='96' height='96' />
                </figure>
              </div>
              <div className='media-content'>
                <div className='content'>
                  <h3 className='title is-4 mb-2'>{card.title}</h3>
                  <p className='mb-3'>{card.description}</p>
                  <div className='buttons'>
                    {card.useUrl != null ? (
                      <a href={card.useUrl} className='button is-primary'>
                        使ってみる
                      </a>
                    ) : (
                      ''
                    )}
                    {card.archiveUrl != null ? (
                      <a href={card.archiveUrl} className='button is-link'>
                        跡地
                      </a>
                    ) : (
                      ''
                    )}
                    {card.sourceCodeUrl != null ? (
                      <a href={card.sourceCodeUrl} className='button is-light'>
                        ソースコード
                      </a>
                    ) : (
                      ''
                    )}
                    {card.sourceProjectUrl != null ? (
                      <a href={card.sourceProjectUrl} className='button is-light'>
                        本体ソースコード
                      </a>
                    ) : (
                      ''
                    )}
                    {card.detailUrl != null ? (
                      <a href={card.detailUrl} className='button is-info'>
                        詳細
                      </a>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SoftwareCardList
