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
        '',
        '',
        'Tolerance is cruel kindness,',
        'A jest that heals and hurts.',
        'It’s peace among the warring sharks,',
        'Where the meek rise from the dirt.',
        '',
        '',
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
        '',
        '',
        'Destiny’s whispers, a cacophony of fate,',
        'Lifting me high, then dropping me late.',
        '',
        '',
        'Like a leaf in the wind, a contradiction’s grace,',
        'To roam the world, seeking my own wee place.',
        '',
        '',
        'Through trials and triumphs, I flutter and steer,',
        'Nurturing courage, dismissing old fear.',
        '',
        '',
        'For I am not mere compost, no, not I,',
        'But a wise fool, resilient and sly.',
        '',
        '',
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
        '',
        'A fragrant bloom fills the air,',
        'Dispelling darkness, banishing care.',
        'The first sip, a rare delight,',
        'A melody of flavors, morning’s first bite.',
        '',
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
        '',
        'Each face is a canvas, tales yet untold,',
        'Twists and turns, a story to unfold.',
        'Chaos and order, a dance profound,',
        'Mysteries unfurled, and connections abound.',
        '',
        '',
        'Paths to explore, challenges rise,',
        'With patience and wit, we seek the prize.',
        'The beauty of this world takes flight,',
        'In tangled layers, shining bright.'
      ]
    },
    'Thunder': {
      title: 'Thunder',
      author: 'Humanlist',
      lines: [
        'In Asgard\'s halls, where legends bloom,',
        'There dwells a god, dispelling gloom.',
        'Thor, the Thunder, with Mjölnir\'s might,',
        'He brings the hope and ends the blight.',
        '',
        '',
        'His eyes, like lightning, pierce the night,',
        'Upon his chariot, goats stride high,',
        'With every clash and thunderous roar,',
        'He guards the realms forevermore.',
        '',
        '',
        'A friend to mortals, strong and true,',
        'In every heart, his legend grew.',
        'In feast and fight, in peace and war,',
        'We raise our voices and sing of Thor.'
      ]
    },
    'Metamorphosis': {
      title: 'Metamorphosis',
      author: 'Humanlist',
      lines: [
        'We are the waves upon the sea,',
        'Endless motion, eternally free.',
        'In the dance of time, we rise and fall,',
        'Yet never vanish, merely evolve.',
        '',
        '',
        'We are the flame within the fire,',
        'A spark that leaps, never to tire.',
        'When embers fade and ashes lie,',
        'Our essence soars, embracing the sky.',
        '',
        '',
        'We are the leaves on autumn trees,',
        'In colors bright, a final tease.',
        'When winter comes and leaves must go,',
        'We become the earth, where new life will grow.',
        '',
        '',
        'We are the stars in the midnight sky,',
        'Burning bright, then winking goodbye.',
        'As one light fades, another is born,',
        'In cosmic cycles, forever adorned.'
      ]
    },
    'The Northern Dance': {
      title: 'The Northern Dance',
      author: 'Humanlist',
      lines: [
        'Whispers say that on a frigid night,',
        'Freyja’s dreams and wisdom take flight,',
        'Emerald greens and sapphire blues,',
        'In rhythmic pulses, they twist and fuse.',
        '',
        '',
        'In the realm where the north winds sigh,',
        'The Northern Lights paint the sky,',
        'Whispering tales, a holy beam,',
        'Unseen pearls of gods, a spectral gleam.',
        '',
        '',
        'Thoughts, like fairies, begin to soar,',
        'Casting hues on the heavens\' floor,',
        'A symphony of colors, bold and free,',
        'A celestial waltz for all to see.',
        '',
        '',
        'So when you gaze at the sky so wide,',
        'And see the lights in their majestic glide,',
        'Remember Freyja, fair, loving, and bright,',
        'Whose dreams become the Northern Light.'
      ]
    },
    'Life Architect': {
      title: 'Life Architect',
      author: 'Humanlist',
      lines: [
        'In the heart\'s arid land,',
        'Let the healing waters flow,',
        'In the womb of sacrifice,',
        'Let life’s seeds in Eden grow.',
        '',
        '',
        'Amid the storm of despair,',
        'A mother’s love, a guiding flare,',
        'Through the chrysalis of change,',
        'Her affirming gaze, unwavering, remains.',
        '',
        '',
        'Woman, architect of being,',
        'Crafting forms with unseen seeing,',
        'With hands that shape and hearts that dream,',
        'She weaves the endless, flowing stream.'
      ]
    },
    'Happiness': {
      title: 'Happiness',
      author: 'Humanlist',
      lines: [
        'Happiness is free—take it,',
        'Ecstasy floats in the air after rain,',
        'Cheer blooms in a stranger\'s smile,',
        'Bliss whispers in the wind’s refrain.',
        '',
        '',
        'Contentment fills a satisfied heart,',
        'Joyfulness dances to our inner song,',
        'It all resides within our minds,',
        'Where happiness, boundless, belongs.',
        '',
        '',
        'Embrace it, for sorrow\'s cost is steep,',
        'Happiness is free—take it,',
        'In its embrace, let your spirit leap.',
        'Isolation’s price is way too high.'
      ]
    }
  };
  
  export default poems;
  
  