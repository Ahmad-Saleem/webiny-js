import {assert} from 'chai';
import User from './entities/user'
import {Driver, Entity} from './../src'

describe('driver override test', function () {
    it('should use basic driver', async () => {
        const user = new User();
        assert.instanceOf(user.getDriver(), Driver);
    });

    it('should use CustomDriver override', async () => {
        class CustomUser extends Entity {}
        class CustomDriver extends Driver {}

        CustomUser.driver = new CustomDriver();
        assert.instanceOf(CustomUser.getDriver(), CustomDriver);
    });
});