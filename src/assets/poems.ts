interface PoemType {
    title: string;
    author: string;
    lines: string[];
}

interface PoemsCollectionType {
    [key: string]: PoemType;
}

const poems: PoemsCollectionType = {
    'The Duel Dance': {
      title: 'The Duel Dance',
      author: 'Humanlist',
      lines: [
        'Tolerance is a wee brave heart,',
        'A fool’s wisdom, a keen-edged dart.',
        'It’s laughing through a tear-stained eye,',
        'A thorn that helps the rose grow high.',
        'Tolerance is cruel kindness,',
        'A jest that heals and hurts.',
        'It’s peace among the warring sharks,',
        'Where the meek rise from the dirt.',
        'Tolerance is the comedy of strife,',
        'The dance of love and pain.',
        'A fire that sometimes fuels the fight,',
        'Yet soothes the heart again.'
      ]
    },
    'The Woman’s Tale': {
      title: 'The Woman’s Tale',
      author: 'Humanlist',
      lines: [
        'I feel like a leaf, a wild wee thing,',
        'Tossed by winds unseen, laughing in the spin.',
        'Destiny’s whispers, a cacophony of fate,',
        'Lifting me high, then dropping me late.',
        'Like a leaf in the wind, a contradiction\'s grace,',
        'To roam the world, seeking my own wee place.',
        'Through trials and triumphs, I flutter and steer,',
        'Nurturing courage, dismissing old fear.',
        'For I am not mere compost, no, not I,',
        'But a wise fool, resilient and sly.',
        'In death as in life, let my worth shine bright,',
        'The power of womanhood, a glorious fight.'
      ]
    },
    'Morning Coffee': {
      title: 'Morning Coffee',
      author: 'Humanlist',
      lines: [
        'A morning dose of happiness,',
        'As sunlight casts its golden kiss.',
        'In my hand, a mug of bliss,',
        'Awakening senses, pure and brisk.',
        '',
        'A fragrant bloom fills the air,',
        'Dispelling darkness, banishing care.',
        'The first sip, a rare delight,',
        'A melody of flavors, morning’s first bite.',
        '',
        'Worries fade, as the day unfolds,',
        'In this ritual, my heart’s stories are told.',
        'A refuge found, in a trusted cup,',
        'A liquid joy, lifting me up.'
      ]
    },
    'Rubik Cube': {
      title: 'Rubik Cube',
      author: 'Humanlist',
      lines: [
        'In a realm of wonders intertwining,',
        'A vibrant mosaic, chaos refining.',
        'Colors swirl in silent chatter,',
        'A tapestry of dreams, in structured scatter.',
        '',
        'Each face is a canvas, tales yet untold,',
        'Twists and turns, a story to unfold.',
        'Chaos and order, a dance profound,',
        'Mysteries unfurled, and connections abound.',
        '',
        'Paths to explore, challenges rise,',
        'With patience and wit, we seek the prize.',
        'The beauty of this world takes flight,',
        'In tangled layers, shining bright.'
      ]
    }
  };
  
  export default poems;
  
  