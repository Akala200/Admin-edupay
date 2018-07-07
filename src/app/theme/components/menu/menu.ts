
import { Menu } from './menu.model';

export const verticalMenuItems = [
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (2, 'Schools', '/pages/schools', null, 'graduation-cap', null, false, 0),
    new Menu (45, 'Users', '/pages/user', null, 'users', null, false, 0),
]

export const horizontalMenuItems = [
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (2, 'Schools', '/pages/schools', null, 'users', null, false, 0),
    new Menu (45, 'Users', '/pages/user', null, 'users', null, false, 0),

]
