import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the Yu-Gi-Oh! related word in 6 tries. This game covers the TCG, Games and Anime.
        <p>After each guess, the color of the tiles will
        change to show how close your guess was to the word.</p>
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="K"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="I" />
        <Cell value="T" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter K is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status="present"
        />
        <Cell value="L" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter G is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell isRevealing={true} isCompleted={true} value="O" status="absent" />
        <Cell value="M" />
        <Cell value="E" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter O is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Have any Word Suggestions or Feedback? Tweet at me!{' '}
        <a
          href="https://twitter.com/ItsBradazHD"
          className="underline font-bold"
        >
          Twitter/ItsBradazHD
        </a>{' '}
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This game built on an open source version of the word guessing game we all know and
        love created by cwackerfuss -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out their code here!
        </a>{' '}
      </p>
    </BaseModal>
  )
}
