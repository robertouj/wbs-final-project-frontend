import React from 'react'
import './ProfileForm.css'

export default function ProfileForm() {
    return (
        <form className="form">
            <div className="control">
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" />
            </div>
            <div className="control">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" />
            </div>
            <div className="action">
                <button>Change Password</button>
            </div>
        </form>
    )
}
