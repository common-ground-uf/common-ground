import { saulProfile, walterProfile } from '../data/dummyUsers';
const {ProfileScreen} = require('./ProfileScreen');
const {render} = require('@testing-library/react-native');
const React = require('react');

// const {render} = require('@testing-library/react-native');
// const React = require('react');
// const {ProfileScreen} = require('./ProfileScreen');
// const { saulProfile, walterProfile } = require('../data/dummyUsers');

describe('ProfileScreen', () => {
    const dummyNavigation = {
        navigate: '',
    };

    it('Renders user\'s own profile correctly', () => {
        const result = render(<ProfileScreen profileData={saulProfile} navigation={dummyNavigation} route='' />);

        expect(result.toJSON()).toMatchSnapshot();
    });

    it('Renders user\'s own profile correctly', () => {
        const result = render(<ProfileScreen profileData={walterProfile} navigation={dummyNavigation} route='' />);

        expect(result.toJSON()).toMatchSnapshot();
    });
});
