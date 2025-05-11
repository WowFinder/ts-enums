import { ClassFeature } from './Class';
import { InnateTrait } from './Trait';

const Feature = {
    ...ClassFeature,
    ...InnateTrait,
};

type Feature = (typeof Feature)[keyof typeof Feature];

export { Feature };
